import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './Screens/Auth/Register';
import SignIn from './Screens/Auth/SignIn';
import ScannerScreen from './Screens/ScannerScreen';
import Home from './Screens/Home';
import Splash from './Screens/Splash';
import Event from './Screens/Event';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const AuthStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="Event"
        component={Event}
        options={({route}) => ({
          title: route.name,
        })}
      />
    </HomeStack.Navigator>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState('azerty');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      {userToken ? (
        <Tabs.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{headerTitleAlign: 'center', headerShown: false}}>
          <Tabs.Screen name="HomeScreen" component={HomeStackScreen} />
          <Tabs.Screen name="Scan" component={ScannerScreen} />
        </Tabs.Navigator>
      ) : (
        <AuthStack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
          <AuthStack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: 'Connexion'}}
          />
          <AuthStack.Screen
            name="Register"
            component={Register}
            options={{title: 'Inscription'}}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
