import { withNavigation } from "@react-navigation/compat";
import {
  Button,
  Card,
  CardItem,
  Content,
  Icon,
  Left,
  List,
  Right,
  Text,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Linking } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import {
  BACKGROUND_COLOR,
  ButtonColor,
  OrderStatus,
  TimeRemainTo,
} from "../../../constance/constance";
import * as firebase from "../../../firebase/firebase-realtime";
import { sendQRCode, setOrderStatus } from "../../../redux/actions/order-list";
import { styles } from "./styles";

const OrderCardUpComing = (props) => {
  const { handleUpdateStatus, order, handleUpdateListApterChangeStatus } =
    props;
  const propsStatus = props.status;

  const dispatch = useDispatch();

  const [timeRemain, setTimeRemain] = useState(0);
  const [status, setStatus] = useState();
  const [listenedOrder, setListenedOrder] = useState();
  const [isAutoPrepareOrder, setIsAutoPrepareOrder] = useState(null);
  const [isShowAlert, setIsShowAlert] = useState(false);

  useEffect(() => {
    firebase.listenOrder(order.id, (orderListened) => {
      if (orderListened) {
        setListenedOrder(orderListened);
        setIsAutoPrepareOrder(orderListened.isAutoPrepareOrder);
        setTimeRemain(orderListened.timeRemain?.split(" ")[0]);
        if (orderListened.status === OrderStatus.WAITING) {
          setStatus(orderListened.status);
        }
      }
    });
  }, []);

  const showAlert = () => {
    setIsShowAlert(true);
  };

  const hideAlert = () => {
    setIsShowAlert(false);
  };

  const makeCall = (numberPhone) => {
    let phoneNumber = `tel:${numberPhone}`;
    hideAlert();
    return Linking.openURL(phoneNumber);
  };

  const renderCustomerName = () => {
    if (order) {
      let arrName = order?.customer?.name.split(" ");
      let name = arrName[arrName.length - 1];
      return name;
    }
  };

  const renderOrderID = () => {
    if (order) {
      let subID = order?.id?.substr(order?.id?.length - 4, 4);
      // console.log("sub id: " , subID);
      return subID;
    }
  };

  useEffect(() => {
    if (listenedOrder) {
      console.log("id order", listenedOrder.id);
      let tmpTimeRemain = listenedOrder.timeRemain + "";
      const arrTimeString = tmpTimeRemain.split(" ");
      const time = +arrTimeString[0];

      if (propsStatus === "to-do" && time <= TimeRemainTo.PREPARATION) {
        console.log("update preparation");
        handleUpdateStatus(OrderStatus.PREPARATION, listenedOrder.id);
      }

      if (
        listenedOrder?.isAutoPrepareOrder == null ||
        (listenedOrder.isAutoPrepareOrder != null && isAutoPrepareOrder == true)
      ) {
        if (
          listenedOrder.status === OrderStatus.PREPARATION &&
          time <= TimeRemainTo.ARRIVAL &&
          !listenedOrder.qrcode
        ) {
          handleUpdateStatus(OrderStatus.WAITING, listenedOrder.id);
        }
      }

      if (
        listenedOrder.status === OrderStatus.CANCELLATION ||
        listenedOrder.status === OrderStatus.RECEPTION
      ) {
        console.log("update order list");
        handleUpdateListApterChangeStatus(order, listenedOrder.status);
      }
    }
  }, [listenedOrder]);

  return (
    <Content>
      <AwesomeAlert
        show={isShowAlert}
        showProgress={false}
        title="Xác nhận"
        message="Bạn chắc chắn muốn giao hàng?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Đồng ý"
        titleStyle={[styles.titleAlert, styles.title_font_weight]}
        messageStyle={[styles.title_font_size]}
        confirmText="Gọi điện"
        confirmButtonColor={ButtonColor.ACCESSS}
        onCancelPressed={async () => {
          hideAlert();
          await dispatch(setOrderStatus(order.id, OrderStatus.RECEPTION));
        }}
        onDismiss={() => {
          hideAlert();
        }}
        onConfirmPressed={() => {
          makeCall(order?.customer?.account?.phone);
        }}
        confirmButtonTextStyle={[
          styles.title_font_size,
          styles.title_font_weight,
        ]}
        cancelButtonTextStyle={[
          styles.title_font_size,
          styles.title_font_weight,
        ]}
      />
      <Card style={styles.card}>
        <CardItem
          style={
            isAutoPrepareOrder != null && isAutoPrepareOrder == false
              ? styles.cardDelay
              : styles.cardHeader
          }
          header
          bordered
        >
          <Left>
            <Text style={styles.title}>
              {renderOrderID()}
              {/* {order.customer.account.phone} - {renderCustomerName()} */}
            </Text>
          </Left>
          <Text
            style={
              timeRemain <= 10 ? styles.lateEstimation : styles.earlyEstimation
            }
          >
            {status ? "đang đợi" : timeRemain ? timeRemain + " phút" : ""}
          </Text>
          <Right style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text style={[styles.title, { marginRight: 20 }]}>
              {/* {renderOrderID()} */}
              {renderCustomerName()} - {order.customer.account.phone}
            </Text>
            {isAutoPrepareOrder != null && isAutoPrepareOrder == false ? (
              <AntDesign size={25} name="clockcircleo" />
            ) : null}
          </Right>
        </CardItem>
        <CardItem
          style={
            isAutoPrepareOrder != null && isAutoPrepareOrder == false
              ? styles.cardBodyDelay
              : styles.cardBody
          }
          body
          bordered
        >
          <Left>
            <List
              style={styles.list}
              dataArray={order.items}
              keyExtractor={order.items.id}
              renderRow={(item) => (
                <CardItem
                  style={
                    isAutoPrepareOrder != null && isAutoPrepareOrder == false
                      ? styles.listDelay
                      : styles.list
                  }
                >
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
          {status ? (
            <Right style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Button
                style={{ borderColor: BACKGROUND_COLOR }}
                onPress={showAlert}
                bordered
              >
                <Text style={{ color: BACKGROUND_COLOR }}>Giao hàng</Text>
              </Button>
              <Button
                style={styles.button}
                onPress={() => {
                  dispatch(sendQRCode(order.id));
                  props.navigation.navigate("QRCODE", {
                    nameScreen: "card-upcoming",
                  });
                }}
              >
                <Text>Gửi mã QR</Text>
              </Button>
            </Right>
          ) : (
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
          )}
        </CardItem>
      </Card>
    </Content>
  );
};

export default withNavigation(OrderCardUpComing);
