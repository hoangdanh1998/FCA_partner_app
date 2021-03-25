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
import { SafeAreaView } from 'react-native'

const OrderUpcoming = (props) => {

  var orderList = props.orderList;
  if (orderList.length === 0) {
    return (
      <Container>
        <Card>
          <CardItem header bordered style={{ borderColor: '#603a18' }}>
            <Left />
            <Text style={styles.columnName}>{props.status == "to-do" ? "Tiếp nhận" : "Pha chế"}</Text>
            <Right />
          </CardItem>
        </Card>
        <Content padder>
          <Text>Hiện tại chưa có đơn hàng nào</Text>
        </Content>
      </Container>
    )
  }

  return (
    <Container style={{ height: "100%" }}>
      <Card>
        <CardItem header bordered style={{ borderColor: '#603a18' }}>
          <Left />
          <Text style={styles.columnName}>{props.status == "to-do" ? "Tiếp nhận" : "Pha chế"}</Text>
          <Right />
        </CardItem>
      </Card>
      <Content padder>

        <List
          keyExtractor={orderList.id}
          dataArray={orderList}
          renderRow={(order) => <OrderCardUpComing
            order={order}
            status={props.status}
            handleUpdateStatus={props.handleUpdateStatus}
            handleUpdateListApterChangeStatus = {props.handleUpdateListApterChangeStatus}
          />}
        />


      </Content>
    </Container>
  );
};

export default OrderUpcoming;
