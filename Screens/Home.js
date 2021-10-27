import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Event')}>
        <Text style={styles.button}>go to the event</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    color: 'white',
    backgroundColor: 'orange',
    borderRadius: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    minWidth: 120,
    textAlign: 'center',
  },
});
