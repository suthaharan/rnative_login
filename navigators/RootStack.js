import * as React from 'react';

// Import colors
import {Colors} from './../components/styles';
const {primary, tertiary} = Colors;

// Import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Import screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';


const Stack = createNativeStackNavigator();

function RootStac() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
            headerStyle: {
                backgroundColor: 'transparent',
            },
            headerTintcolor: tertiary,
            headerTransparent: true,
            headerTitle: '',
            headerLeftContainerStyle: {
                paddingLeft: 20
            }
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} options={{header: () => null}} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Welcome" options={{headerTintcolor: primary}} component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStac;