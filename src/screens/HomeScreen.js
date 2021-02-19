import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";


const HomeScreen = () => {
  return (
  <View>
    <Text style={styles.text}>Hello</Text>
    <Button 
      onPress={() => console.log('Button pressed')}
      title='Go to component demo' />
      <TouchableOpacity onPress= {() => console.log('List Press')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
