import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../global/styles";

interface cButtonProps {
  title: string;
  onPress: () => void;
}
export default function CButton({
  title,
  onPress,
}: cButtonProps): ReactElement {
  return (
    <View style={styles.newGameButton}>
      <Text style={styles.newGameText} onPress={onPress}>
        {title}
      </Text>
    </View>
  );
}
