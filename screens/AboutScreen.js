// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Button } from '@react-navigation/elements';
// import { useNavigation } from '@react-navigation/native';
// import { Platform } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThisScreen from './ThisScreen';
import ThatScreen from './ThatScreen';

const Stack = createNativeStackNavigator();

export default function AboutScreen({ route }) {
  // props children, props.route

  return (
    <Stack.Navigator initialRouteName="This" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="This" component={ThisScreen} />
      <Stack.Screen name="That" component={ThatScreen} />
    </Stack.Navigator>
  );
}
