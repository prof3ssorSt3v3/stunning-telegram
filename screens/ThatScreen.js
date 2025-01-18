import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';

export default function ThatScreen({ route }) {
  // props children, props.route
  const nav = useNavigation();

  function goto(routeName) {
    let num = Math.floor(Math.random() * 500); // 0 - 499
    if (routeName) {
      nav.navigate(routeName, { id: num });
      //nav.push(routeName, {}) //add the route and navigate, even if it is the same as current
      //nav.popTo(routeName, {}) //back to the previous instance of routeName
      //nav.goBack(); back one step
    } else {
      nav.popToTop();
      //back to the beginning of the navigation stack
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>That Settings Screen</Text>
      {Platform.OS === 'ios' ? <Text>IOS</Text> : <Text>Android</Text>}
      <Button style={styles.btn} onPress={() => goto('This')}>
        Go To About This
      </Button>
      <Button style={styles.btn} onPress={() => goto('That')}>
        Go To About That
      </Button>
      <StatusBar style="auto" />
    </View>
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
