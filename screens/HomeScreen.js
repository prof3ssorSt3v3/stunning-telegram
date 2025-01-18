import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ route }) {
  // props children, props.route
  //route.params ~== URLSearchParams
  const nav = useNavigation();
  let id = route.params?.id ?? 999;

  function goto(routeName) {
    nav.navigate(routeName, {});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.title}>The magic number is {id}.</Text>
      {/* Add the Navigation Buttons  */}
      <Button style={styles.btn} onPress={() => goto('Contact')}>
        Go To Contact
      </Button>
      <Button style={styles.btn} onPress={() => goto('About')}>
        Go To About
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
