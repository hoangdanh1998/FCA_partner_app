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
import OrderCardUpComing from "../../atoms/order-card-upcoming/order-card-upcoming";

const OrderUpcoming = (props) => {
  var orderList = props.orderList;

  return (
    <Container>
      <Card>
        <CardItem header bordered style={{borderColor: '#603a18'}}>
          <Left />
          <Text style={styles.columnName}>{props.status == "to-do" ? "Tiếp nhận" : "Pha chế"}</Text>
          <Right />
        </CardItem>
      </Card>
      <Content padder>
        <List
          keyExtractor={orderList.id}
          dataArray={orderList}
          renderRow={(order) => <OrderCardUpComing order={order} />}
        />
      </Content>
    </Container>
  );
};

export default OrderUpcoming;
