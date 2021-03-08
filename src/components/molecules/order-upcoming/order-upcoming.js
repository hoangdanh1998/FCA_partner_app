import {
  Card,
  CardItem, Container,
  Content,




  Left, List,

  Right, Text
} from "native-base";
import React from "react";
import OrderCardUpComing from "../../atoms/order-card-upcoming/order-card-upcoming";
import { styles } from "./styles";

const OrderUpcoming = (props) => {
  const { updateTimeRemain, handleUpdateStatus, status } = props;
  // console.log("props of order card up comming",props);
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
    <Container style={{height:"100%"}}>
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
          renderRow={(order) => <OrderCardUpComing updateTimeRemain={updateTimeRemain} order={order} handleUpdateStatus={handleUpdateStatus} />}
          />


      </Content>
    </Container>
  );
};

export default OrderUpcoming;
