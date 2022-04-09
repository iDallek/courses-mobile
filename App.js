import React from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './pages/Home/index';
import EditCourse from './pages/EditCourse';
import AddCourse from './pages/AddCourse';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            title: 'Cursos',
          }}
        />
        <Stack.Screen
          name="Edit"
          component={EditCourse}
          options={{
            title: 'Alterar Curso',
          }}
        />
        <Stack.Screen
          name="Add"
          component={AddCourse}
          options={{
            title: 'Adicionar Curso',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
