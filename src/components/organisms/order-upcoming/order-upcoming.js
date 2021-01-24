import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  List,
  Left,
  Right,
} from "native-base";
import { styles } from "./styles";
import OrderCardUpComing from "../../molecules/order-card-upcoming/order-card-upcoming";

const OrderUpcoming = (props) => {
  var orderList = props.orderList;

  return (
    <Container>
      <Card>
        <CardItem header bordered>
          <Left />
          <Text style={styles.columnName}>{orderList.status}</Text>
          <Right />
        </CardItem>
      </Card>
      <Content padder>
        <List
          style={{ flex: orderList.orders.length }}
          dataArray={orderList.orders}
          renderRow={(order) => <OrderCardUpComing order={order} />}
        />
      </Content>
    </Container>
  );
};

export default OrderUpcoming;
