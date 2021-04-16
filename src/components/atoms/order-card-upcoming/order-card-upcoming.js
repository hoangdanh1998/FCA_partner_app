import { withNavigation } from '@react-navigation/compat';
import { Button, Card, CardItem, Content, Icon, Left, List, Right, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { OrderStatus, TimeRemainTo } from '../../../constance/constance';
import * as firebase from '../../../firebase/firebase-realtime';
import { sendQRCode } from '../../../redux/actions/order-list';
import { styles } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

const OrderCardUpComing = (props) => {

  const { handleUpdateStatus, order, handleUpdateListApterChangeStatus } = props;
  const propsStatus = props.status;

  const dispatch = useDispatch();

  const [timeRemain, setTimeRemain] = useState(0);
  const [status, setStatus] = useState();
  const [listenedOrder, setListenedOrder] = useState();
  const [isAutoPrepareOrder, setIsAutoPrepareOrder] = useState(null);

  useEffect(() => {
    firebase.listenOrder(order.id, (orderListened) => {
      if (orderListened) {
        setListenedOrder(orderListened);
        setIsAutoPrepareOrder(orderListened.isAutoPrepareOrder);
        setTimeRemain(orderListened.timeRemain?.split(' ')[0]);
        if (orderListened.status === OrderStatus.WAITING) {
          setStatus(orderListened.status);
        }
      }
    })
  }, []);


  useEffect(() => {
    if (listenedOrder) {
      console.log('id order', listenedOrder.id)
      let tmpTimeRemain = listenedOrder.timeRemain + '';
      const arrTimeString = tmpTimeRemain.split(" ");
      const time = +arrTimeString[0];

      if (propsStatus === 'to-do' && time <= TimeRemainTo.PREPARATION) {
        console.log('update preparation')
        handleUpdateStatus(OrderStatus.PREPARATION, listenedOrder.id);
      }

      if (listenedOrder?.isAutoPrepareOrder == null ||
        (listenedOrder.isAutoPrepareOrder != null && isAutoPrepareOrder == true)) {
        if (listenedOrder.status === OrderStatus.PREPARATION && time <= TimeRemainTo.ARRIVAL) {
          handleUpdateStatus(OrderStatus.WAITING, listenedOrder.id)
        }
      }



      if (listenedOrder.status === OrderStatus.CANCELLATION
        || listenedOrder.status === OrderStatus.RECEPTION) {
        console.log("update order list");
        handleUpdateListApterChangeStatus(order, listenedOrder.status);
      }
    }
  }, [listenedOrder])

  return (
    <Content>
      <Card style={
        styles.card

      }>
        <CardItem style={
          isAutoPrepareOrder != null && isAutoPrepareOrder == false
            ? styles.cardDelay
            : styles.cardHeader
        } header bordered>
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
            {status ? 'đang đợi' : (timeRemain ? timeRemain + ' phút' : '')}
          </Text>
          <Right>
            {
              (isAutoPrepareOrder != null && isAutoPrepareOrder == false)
                ? <AntDesign
                  size={25}
                  name="clockcircleo"
                />
                : null
            }

          </Right>
        </CardItem>
        <CardItem
          style={
            isAutoPrepareOrder != null && isAutoPrepareOrder == false
              ? styles.cardBodyDelay
              : styles.cardBody
          }

          body bordered>
          <Left>

            <List
              style={styles.list}
              dataArray={order.items}
              keyExtractor={order.items.id}
              renderRow={(item) => (
                <CardItem style={
                  isAutoPrepareOrder != null && isAutoPrepareOrder == false
                    ? styles.listDelay
                    : styles.list
                }>
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
