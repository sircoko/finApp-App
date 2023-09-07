import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Navigation } from './navigation/Navigation';
import { BottonTabs } from './navigation/BottonTabs';

export default function App() {
  return (
    <NavigationContainer>
      <BottonTabs />
    </NavigationContainer>
  );
}
