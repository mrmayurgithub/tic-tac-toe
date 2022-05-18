import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import CButton from "../../components/cbutton";
import styles from "../../global/styles";

interface props {}
export default function Home({}: props): ReactElement {
  return (
    <View style={styles.home}>
      <CButton title="Single Player" onPress={() => {}} />
      <CButton title="Double Player" onPress={() => {}} />
    </View>
  );
}
