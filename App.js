import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ScannerScreen = () => {
  const [state, setState] = useState({qr: ''});

  const onRead = e => {
    setState({qr: e.data});
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <QRCodeScanner
        onRead={onRead}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={<Text style={styles.centerTwext}>Scan Qrcode</Text>}
        bottomContent={
          <TouchableOpacity>
            <Text>{state.qr}</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home page</Text>
      <Button title="Scan" onPress={() => navigation.navigate('Scan')} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
