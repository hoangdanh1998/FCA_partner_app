import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, HEADER_FONT_SIZE, StatisticColor } from "../../../constance/constance";
export const styles = StyleSheet.create({
  card: {
    flex: 1,
    // backgroundColor:"red"
  },
  cardDelay: {
    flex: 1,
    backgroundColor: "#E8E8E8"
  },
  cardHeader: {
    flex: 1,
  },
  cardBody: {
    width: "100%",
    flexDirection: "row",
  },
  cardBodyDelay: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#E8E8E8"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  earlyEstimation: {
    color: "#000000",
    fontSize: 20,
  },
  lateEstimation: {
    color: "#ff6f00",
    fontSize: 20,
  },
  item: {
    borderBottomColor: "#ffffff",
  },
  itemText: {
    fontSize: 20,
    color: "#000000",
  },
  icon: {
    color: "#000000",
    fontSize: 50,
  },
  list: {
    width: "100%",
  },
  listDelay: {
    width: "100%",
    backgroundColor: "#E8E8E8"
  },
  titleAlert: {
    fontSize: 25
  },
  title_font_weight: {
    fontWeight: "bold",
  },
  title_font_size: {
    fontSize: HEADER_FONT_SIZE
  },
  button: {
    backgroundColor:BACKGROUND_COLOR,
    marginLeft: 10
},
});
