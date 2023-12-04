import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './screens/Login.js'; // Vista de inicio de sesión
import MenuDirector from './screens/MenuDirector.js'; // Vista del menuDirector
import MenuDoctor from './screens/MenuDoctor.js'; // vista del MenuDoctor
import CrearCitas from './screens/crearCitas.js';
import 'expo-dev-client';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="MenuDirector" component={MenuDirector} />
        <Stack.Screen name="MenuDoctor" component={MenuDoctor} />
        <Stack.Screen name="CrearCitas" component={CrearCitas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
