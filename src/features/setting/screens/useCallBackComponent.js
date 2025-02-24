import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { memo } from "react";
const UseCallBackComponent = ({ testParam }) => {
  console.log("view is rendered");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World! 🌍 {testParam()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
export default memo(UseCallBackComponent);
