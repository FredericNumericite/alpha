import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Event = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Event page</Text>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
