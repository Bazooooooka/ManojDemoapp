import React, { useState, useMemo, useCallback } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import UseCallBackComponent from "./useCallBackComponent";
const getMagicalNumber = () => {};
const numberArray = new Array(30000000).fill(0).map((result, i) => {
  return { index: i, isMagical: i === 29000000 };
});

export const UseMemoUseCallBack = () => {
  //   const getTestParam = () => {
  //     return "ole ole";
  //   };
  const [count, setCount] = useState(1);
  const [number, setNumber] = useState(numberArray);

  //   const getTestParam = useCallback(() => {
  //     return "ole ole" + count;
  //   }, [count]); if dependency changes it reloads

  const getTestParam = useCallback(() => {
    return "ole ole" + count;
  }, [count]);

  const magicalNumber = useMemo(
    () => number.find((Item) => Item.magicalNumber == true),
    [number]
  );

  //const magicalNumber = number.find((Item) => Item.magicalNumber == true);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setCount(count + 1);
          if (count == 10) {
            setNumber(
              new Array(30000000).fill(0).map((result, i) => {
                return { index: i, isMagical: i === 29000000 };
              })
            );
          }
        }}
        title="Counter Increase"
      ></Button>
      <Text style={styles.text}>Hello,New Count is =={count}</Text>
      <UseCallBackComponent testParam={getTestParam} />
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
