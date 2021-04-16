import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import CartNewItem from "../../components/atoms/cart-new-item";
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { Button, List } from "native-base";
import {
  BACKGROUND_COLOR,
  HEADER_FONT_SIZE,
  itemStatus,
} from "../../constance/constance";
import { SegmentedControl } from "@ant-design/react-native";
import NewItemModal from "../../components/atoms/new-item-modal";
import { getPartner } from "../../redux/actions/account";

export default function ItemCatalogScreen(props) {
  const dispatch = useDispatch();
  const partner = useSelector((state) => state.account.partner);
  const [selectIndex, setSelectIndex] = useState(0);
  // const [listItem, setListItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(listItem);

  // console.log("partner item:",partner?.items);
  // const listactive  = listItem.filter((item) => {
  //         return item?.status == itemStatus.ACTIVE;
  //     })
  // console.log("hey yo:", listactive);

  const onChange = (e) => {
    setSelectIndex(e.nativeEvent.selectedSegmentIndex);
    // console.log(e.nativeEvent.selectedSegmentIndex);
  };

  const handleShowModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    dispatch(getPartner(partner?.id));
  }, [dispatch])

  const renderItem = () => {
    if (partner) {
      const listItem = [...partner?.items];

      if (listItem) {
        try {
          switch (selectIndex) {
            case 0:
              // const activeList = partner?.items.filter((item) => item?.status == itemStatus.ACTIVE
              // )
              const listactive = listItem.filter((item) => {
                return item?.status == itemStatus.ACTIVE;
              });
              // console.log("hey yo:", listactive);
              // console.log("activeList: " + activeList);
              if (listactive.length === 0) {
                return (
                  <View
                    style={{
                      justifyContent: "center",
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: HEADER_FONT_SIZE }}>
                      Bạn chưa có đồ uống để bán
                    </Text>
                  </View>
                );
              } else {
                return (
                  <List
                    style={{ marginVertical: 10 }}
                    dataArray={listactive}
                    keyExtractor={(item) => item?.id}
                    renderRow={(item) => (
                      <CartNewItem item={item} selectIndex={selectIndex} />
                    )}
                  />
                );
              }
              break;
            case 1:
              const archiveList = listItem.filter((item) => {
                return item?.status == itemStatus.ARCHIVE;
              });
              console.log("archiveList: " + archiveList);
              if (archiveList.length === 0) {
                return (
                  <View
                    style={{
                      justifyContent: "center",
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: HEADER_FONT_SIZE }}>
                      Bạn chưa có đồ uống để bán
                    </Text>
                  </View>
                );
              } else {
                return (
                  <List
                    style={{ marginVertical: 10 }}
                    dataArray={archiveList}
                    keyExtractor={(item) => item?.id}
                    renderRow={(item) => (
                      <CartNewItem item={item} selectIndex={selectIndex} />
                    )}
                  />
                );
              }
              break;
            case 2:
              const processList = listItem.filter((item) => {
                return item?.status == itemStatus.PROCESS;
              });
              if (processList.length === 0) {
                return (
                  <View
                    style={{
                      justifyContent: "center",
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: HEADER_FONT_SIZE }}>
                      Bạn chưa có đồ uống để bán
                    </Text>
                  </View>
                );
              } else {
                return (
                  <List
                    style={{ marginVertical: 10 }}
                    dataArray={processList}
                    keyExtractor={(item) => item?.id}
                    renderRow={(item) => (
                      <CartNewItem item={item} selectIndex={selectIndex} />
                    )}
                  />
                );
              }

            default:
              return;
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  useEffect(() => {
    renderItem();
  }),
    [selectIndex];

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <SegmentedControl
          values={[
            <Text style={{ fontSize: HEADER_FONT_SIZE }}>Chấp nhận</Text>,
            <Text style={{ fontSize: HEADER_FONT_SIZE }}>Từ Chối</Text>,
            <Text style={{ fontSize: HEADER_FONT_SIZE }}>Đang chờ</Text>,
          ]}
          tintColor={BACKGROUND_COLOR}
          style={{ height: 45, width: 320 }}
          onChange={onChange}
        />
        <Button
          bordered
          style={styles.button}
          onPress={() => props.navigation.navigate("NEW_ITEMS")}
        >
          <Text style={styles.titleButton}>ĐĂNG KÍ MÓN</Text>
        </Button>
      </View>
      {renderItem()}
    </View>
  );
}
