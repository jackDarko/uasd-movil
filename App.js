import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing';
import Login from './screens/Login';
import MenuPrincipal from './screens/MenuPrincipal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        {/* Pantalla de Inicio */}
        <Stack.Screen 
          name="Landing" 
          component={Landing} 
          options={{ headerShown: false }} 
        />

        {/* Pantalla de Login */}
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Iniciar Sesión' }} 
        />

        {/* Menú Principal */}
        <Stack.Screen 
          name="MenuPrincipal" 
          component={MenuPrincipal} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
