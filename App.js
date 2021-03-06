import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/carItem';
import CarsList from './components/CarsList';
import Header from './components/header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* <CarsList /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
