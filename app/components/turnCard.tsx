import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { cardProps } from "../global/types";
import React from "react";
import colors from "../global/colors";

export default function Card(props: cardProps) {
  const styles = StyleSheet.create({
    card: {
      flexDirection: "row",
      backgroundColor: props.bgColor,
      padding: props.buttonPadding,
      width: props.buttonWidth,
      height: props.buttonHeight,
      borderWidth: props.buttonBorderWidth,
      borderRadius: props.buttonRadius,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 100,
    },
    text: {
      color: props.btnTextColor ? props.btnTextColor : colors.white,
      alignSelf: "center",
      fontSize: 24,
      fontWeight: "bold",
    },
  });
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}
