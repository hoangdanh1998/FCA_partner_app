import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  List,
  ListItem,
  Left,
  Right,
  Icon,
} from "native-base";
import { styles } from "./styles";

const OrderCardUpComing = (order) => {
  var sampleOrder = {
    phone: "0987654321",
    estTime: 10,
    status: "preparation",
    items: [
      {
        name: "Chocolate",
        quantity: 1,
      },
      {
        name: "Expresso",
        quantity: 1,
      },
    ],
  };
  return (
    <Container>
      <Content padder>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Left>
              <Text style={styles.title}>{sampleOrder.phone}</Text>
            </Left>
            <Text
              style={
                sampleOrder.estTime <= 10
                  ? styles.lateEstimation
                  : styles.earlyEstimation
              }
            >
              {sampleOrder.estTime} mins
            </Text>
            <Right></Right>
          </CardItem>
          <CardItem body bordered>
            <Left>
              <List
                dataArray={sampleOrder.items}
                renderRow={(item) => (
                  <CardItem style={styles.item}>
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
                  sampleOrder.status == "acceptance"
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
    </Container>
  );
};

export default OrderCardUpComing;
