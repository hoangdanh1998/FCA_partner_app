import { Card, CardItem, Content, Icon, Left, List, Right, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { TimeRemainTo } from '../../../constance/constance';
import { listenOrder } from '../../../firebase/firebase-realtime';
import { styles } from "./styles";

const OrderCardUpComing = (props) => {

  const handleUpdateStatus = props.handleUpdateStatus;
  const order = props.order;

  const [timeRemain, setTimeRemain] = useState(0);
  useEffect(() => {
    (async () => {
      listenOrder(order.id, (timeRemain) => {
        handleUpdateStatusWithTime(timeRemain);
        setTimeRemain(timeRemain);
      })
    })();
  }, [])


  const handleUpdateStatusWithTime = (timeRemain) => {
    
    if (props.status == "to-do") {
      if(timeRemain === 0){
        
        return;
      }
      timeRemain += "";
      const arrTimeString = timeRemain.split(" ");
      
      const time = parseInt(arrTimeString[0]);
      console.log("Time: ", time);
      if (time <= TimeRemainTo.PREPARATION) {
        handleUpdateStatus(props.status, order.id);
      }
    }

  }

  return (
    <Content>
      <Card style={styles.card}>
        <CardItem style={styles.cardHeader} header bordered>
          <Left>
            <Text style={styles.title}>{order.customer.phone}</Text>
          </Left>
          <Text
            style={
              timeRemain <= 10
                ? styles.lateEstimation
                : styles.earlyEstimation
            }
          >
            {timeRemain}
          </Text>
          <Right></Right>
        </CardItem>
        <CardItem style={styles.cardBody} body bordered>
          <Left>

            <List
              style={styles.list}
              dataArray={order.items}
              keyExtractor={order.items.id}
              renderRow={(item) => (
                <CardItem style={styles.list}>
                  <Left>
                    <Text style={styles.itemText}>{item.name}</Text>
                  </Left>
                  <Right>
                    <Text style={styles.itemText}>{item.quantity}</Text>
                  </Right>
                </CardItem>
              )}
            />
          </Left>
          <Right>
            <Icon
              button
              onPress={() => handleUpdateStatus(props.status, order.id)}
              android={
                order.status == "acceptance"
                  ? "md-arrow-forward"
                  : "chevron-forward"
              }
              name="arrow-forward"
              style={styles.icon}
            />
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default OrderCardUpComing;
