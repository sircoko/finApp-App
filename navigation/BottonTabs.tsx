import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '../screens/DashboardScreen';
import { MovementsScreen } from '../screens/MovementsScreen';
import { BudgetsScreen } from '../screens/BudgetsScreen';
import { CategoriesScreen } from '../screens/CategoriesScreen';

const Tab = createBottomTabNavigator();

export const BottonTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Dashboard'>
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Resumen'}} />
      <Tab.Screen name="Movements" component={MovementsScreen} options={{ title: 'Movimientos'}} />
      <Tab.Screen name="Budgets" component={BudgetsScreen} options={{ title: 'Presupuestos'}} />
      <Tab.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Categorías'}} />
    </Tab.Navigator>
  );
}