import { Card, CardItem, Content, Icon, Left, List, Right, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { OrderStatus, TimeRemainTo } from '../../../constance/constance';
import { listenOrder } from '../../../firebase/firebase-realtime';
import { styles } from "./styles";

const OrderCardUpComing = (props) => {

  const handleUpdateStatus = props.handleUpdateStatus;
  const order = props.order;

  const [timeRemain, setTimeRemain] = useState(0);
  const [status, setStatus] = useState();
  useEffect(() => {
    (async () => {
      listenOrder(order.id, (orderListened) => {
        if (orderListened) {
          handleUpdateStatusWithTime(orderListened);
          setTimeRemain(orderListened.timeRemain);
          if (orderListened.status === OrderStatus.WAITING) {
            setStatus(orderListened.status);
          }
        }
      })
    })();
  }, [])


  const handleUpdateStatusWithTime = (orderListened) => {
    let tmpTimeRemain = orderListened.timeRemain + '';
    const arrTimeString = tmpTimeRemain.split(" ");
    const time = +arrTimeString[0];

    if (orderListened.status === OrderStatus.ACCEPTANCE && time <= TimeRemainTo.PREPARATION) {
      handleUpdateStatus(OrderStatus.PREPARATION, order.id);
    }
    if (orderListened.status === OrderStatus.PREPARATION && time <= TimeRemainTo.ARRIVAL) {
      handleUpdateStatus(OrderStatus.WAITING, orderListened.id)
    }

  }

  return (
    <Content>
      <Card style={styles.card}>
        <CardItem style={styles.cardHeader} header bordered>
          <Left>
            <Text style={styles.title}>{order.customer.account.phone}</Text>
          </Left>
          <Text
            style={
              timeRemain <= 10
                ? styles.lateEstimation
                : styles.earlyEstimation
            }
          >
            {status ? status : timeRemain}
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
