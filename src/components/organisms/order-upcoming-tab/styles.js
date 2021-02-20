import { StyleSheet } from "react-native";
import { HEADER_FONT_SIZE } from "../../../constance/constance";
export const styles = StyleSheet.create({
  switch_view: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
  },
  switch_container: {
    flex: 50,
    flexDirection: "row",
  },
  switch: {
    fontSize: 30,
  },
  switch_text: {
    height: "100%",
    fontSize: 20,
    textAlignVertical: "center",
    textAlign: "left",
  },
  order_view: {
    flex: 9,
    flexDirection: "row",
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  error_message: {
    fontSize: HEADER_FONT_SIZE,
    color: "red"
  },

  button: {
    marginTop:20,
    width: 150,
    backgroundColor: "#82B366",
    borderRadius: 30,
    padding: 10,
    elevation: 2,
    alignItems: "center",
  },
  textButton: {
    color: "#fff"
  },
  boldText: {
    fontWeight: "bold"
  },
});
