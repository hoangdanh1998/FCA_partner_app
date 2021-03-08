import { Card, CardItem, Content, Icon, Left, List, Right, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { OrderStatus, TimeRemainTo } from '../../../constance/constance';
import { listenOrder } from '../../../firebase/firebase-realtime';
import { styles } from "./styles";


const OrderCardUpComing = (props) => {

  const handleUpdateStatus = props.handleUpdateStatus;
  const updateTimeRemain = props.updateTimeRemain;
  const order = props.order;

  const [timeRemain, setTimeRemain] = useState(0);
  useEffect(() => {
    (async () => {
      listenOrder(order.id, (order) => {
        console.log(order.timeRemain)
        setTimeRemain(order.timeRemain);
        handleUpdateStatusWithTime(order);
      })
    })();
  }, [])

  const handleUpdateStatusWithTime = (orderListened) => {
    let myTime = orderListened.timeRemain;
    if (order.status === OrderStatus.ACCEPTANCE) {
      if (myTime === 0) {
        return;
      }
      myTime += "";
      const arrTimeString = myTime.split(" ");
      const time = +arrTimeString[0];
      order[`timeRemain`] = time;
      if (time <= TimeRemainTo.PREPARATION) {
        handleUpdateStatus(order.status, order.id);
      } else {
        updateTimeRemain(order)
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
              onPress={() => handleUpdateStatus(order.status, order.id)}
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
