import React, { ReactElement } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { boxProps, Props } from "../global/types";
import styles from "../global/styles";

interface props {
  id: number;
  value?: any;
  onClick: any;
}
export default function Box(props: props): ReactElement {
  return (
    <TouchableWithoutFeedback onPress={() => props.onClick(props.id)}>
      <View style={styles.container}>
        {props.value === 1 ? (
          <Text style={styles.cross}>X</Text>
        ) : props.value == 2 ? (
          <Text style={styles.circle}>.</Text>
        ) : (
          <Text></Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
