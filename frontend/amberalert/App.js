import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from "./components/Menu";
import T_API from './components/TakingAPI';

export default function App() {
  return (
    <View style={styles.container}>
      <T_API></T_API>
      <Menu></Menu>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
