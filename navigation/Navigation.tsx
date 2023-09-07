import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { DashboardScreen } from '../screens/DashboardScreen';
import { MovementsScreen } from '../screens/MovementsScreen';
import { IncomesScreen } from '../screens/IncomesScreen';
import { ExpensesScreen } from '../screens/ExpensesScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{title: 'Dashboard'}}
      />
      <Stack.Screen
        name="MovementsScreen"
        component={MovementsScreen}
      />
      <Stack.Screen
        name="IncomesScreen"
        component={IncomesScreen}
      />
      <Stack.Screen
        name="ExpensesScreen"
        component={ExpensesScreen}
      />
    </Stack.Navigator>
  );
};