import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{marginBottom: 20}}>
        <Text style={styles.button}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.button}>Inscription</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

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
