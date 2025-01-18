import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function ContactScreen({ route }) {
  // props children, props.route
  let id = route.params?.id;
  const nav = useNavigation();

  function goto(routeName) {
    nav.navigate(routeName, {});
  }

  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="InContact">
        {(props) => (
          <View style={styles.container}>
            <Text style={styles.title}>Contact Screen</Text>
            <Text style={styles.title}>{id}</Text>
            {/* Add the Navigation Buttons  */}
            <Button style={styles.btn} onPress={() => goto('Home')}>
              Go To Home
            </Button>
            <Button style={styles.btn} onPress={() => goto('About')}>
              Go To About
            </Button>
            <StatusBar style="auto" />
          </View>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => Linking.openURL('https://reactnative.dev/')} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginBlock: 10,
  },
  title: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
