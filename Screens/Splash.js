import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
        LINKPOWER
      </Text>
      <Text style={{color: 'white'}}>chargement...</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
});
