import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
//import each of the Screen for our app

//
const Tab = createBottomTabNavigator();

export default function App() {
  let num = Math.random();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
        screenOptions={{}}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ focused, color, size }) => {
              //focused is a boolean that we can use to change the icon or color
              return <MaterialIcons name="home" size={size} color={color} focused={focused} />;
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: 'About',
            tabBarBadge: 1, //add a badge to the icon
            tabBarIcon: ({ focused, color, size }) => {
              //focused is a boolean that we can use to change the icon or color
              return <MaterialIcons name="display-settings" size={size} color={color} focused={focused} />;
            },
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            title: 'Contact',
            tabBarBadge: 3, //add a badge to the icon
            tabBarIcon: ({ focused, color, size }) => {
              //focused is a boolean that we can use to change the icon or color
              return <MaterialIcons name="alternate-email" size={size} color={color} focused={focused} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
