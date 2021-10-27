import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

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

export default ScannerScreen;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
