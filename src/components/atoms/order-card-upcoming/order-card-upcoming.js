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
import { SafeAreaView } from 'react-native'
import { listenOrder } from '../../../firebase/realtime-database/listener';
import { useEffect } from 'react'

const OrderCardUpComing = (props) => {
  var order = props.order;
  const [timeRemain, setTimeRemain] = useState(0);
  useEffect(() => {
    (async () => {
      listenOrder(order.id, (timeRemain) => {
        setTimeRemain(timeRemain)
      })
    })();
  }, [])
    
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
              onPress={() => alert("This is Card Header")}
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
