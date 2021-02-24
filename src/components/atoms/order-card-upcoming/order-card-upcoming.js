import React, { useState } from "react";
import {
  Content,
  Card,
  CardItem,
  Text,
  List,
  Left,
  Right,
  Icon,
} from "native-base";
import { styles } from "./styles";
import { listenOrder } from '../../../firebase/realtime-database/listener';
import { useEffect, useCallback } from 'react';
import { setOrderStatus } from "../../../redux/action/order-list";
import { OrderStatus } from "../../../constance/constance";
import {useDispatch} from 'react-redux'
import {withNavigation} from '@react-navigation/compat'


const OrderCardUpComing = (props) => {
  var order = props.order;
  const [timeRemain, setTimeRemain] = useState(0);
  // useEffect(() => {
  //   // (async () => {
  //   //   listenOrder(order.id, (timeRemain) => {
  //   //     setTimeRemain(timeRemain)
  //   //   })
  //   // })();
  // }, [])

  const dispatch = useDispatch();
  const handleUpdateStatus = props.handleUpdateStatus ;
  
    
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
            {timeRemain} mins
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

export default withNavigation(OrderCardUpComing);
