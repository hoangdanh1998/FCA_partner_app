import React, {useState} from "react";
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



const OrderCardUpComing = (props) => {
  var order = props.order;
  
  return (
    <Content>
      <Card style={styles.card}>
        <CardItem style={styles.cardHeader} header bordered>
          <Left>
            <Text style={styles.title}>{order.phone}</Text>
          </Left>
          <Text
            style={
              order.estTime <= 10
                ? styles.lateEstimation
                : styles.earlyEstimation
            }
          >
            {order.estTime} mins
          </Text>
          <Right></Right>
        </CardItem>
        <CardItem style={styles.cardBody} body bordered>
          <Left>
            <List
              style={styles.list}
              dataArray={order.items}
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
