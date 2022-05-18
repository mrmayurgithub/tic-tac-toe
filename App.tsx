import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GameScreen from "./app/ui/screens/gameScreen";
import colors from "./app/global/colors";
import styles from "./app/global/styles";
export default function App() {
  return (
    <View style={styles.wholeScreen}>
      <GameScreen />
    </View>
  );
}
