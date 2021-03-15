import { withNavigation } from '@react-navigation/compat';
import { Button, Card, CardItem, Content, Icon, Left, List, Right, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { OrderStatus, TimeRemainTo } from '../../../constance/constance';
import * as firebase from '../../../firebase/firebase-realtime';
import { sendQRCode } from '../../../redux/actions/order-list';
import { styles } from "./styles";

const OrderCardUpComing = (props) => {

  const { handleUpdateStatus, order } = props;
  const propsStatus = props.status;

  const [timeRemain, setTimeRemain] = useState(0);
  const [status, setStatus] = useState();
  const [listenedOrder, setListenedOrder] = useState();

  useEffect(() => {
        firebase.listenOrder(order.id, (orderListened) => {
              if (orderListened) {
                setListenedOrder(orderListened);
                setTimeRemain(orderListened.timeRemain);
                if (orderListened.status === OrderStatus.WAITING) {
                  setStatus(orderListened.status);
                }
              }
        })
  }, []);
  
  useEffect(() => {
    if (listenedOrder) {
      let tmpTimeRemain = listenedOrder.timeRemain + '';
      const arrTimeString = tmpTimeRemain.split(" ");
      const time = +arrTimeString[0];
      
      if (propsStatus === 'to-do' && time <= TimeRemainTo.PREPARATION) {
        console.log('update preparation')
        handleUpdateStatus(OrderStatus.PREPARATION, listenedOrder.id);
      }

      if (listenedOrder.status === OrderStatus.PREPARATION && time <= TimeRemainTo.ARRIVAL) {
        handleUpdateStatus(OrderStatus.WAITING, listenedOrder.id)
      }
    }
  }, [listenedOrder])

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
            {status ? 'đang đợi' : timeRemain}
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
            {status ? (<Button
              style={styles.button}
              onPress={() => {
                dispatch(sendQRCode(order.id));
                props.navigation.navigate("QRCODE");
              }}
              rounded>
              <Text>Gửi mã QR</Text>
            </Button>) : (<Icon
              button
              onPress={() => handleUpdateStatus(props.status, order.id)}
              android={
                order.status == "acceptance"
                  ? "md-arrow-forward"
                  : "chevron-forward"
              }
              name="arrow-forward"
              style={styles.icon}
            />)}


          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default withNavigation(OrderCardUpComing);
