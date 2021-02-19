import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";


const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Text style={styles.text}>Hello</Text>
    <Button 
      onPress={() => navigation.navigate('Components')}
      title='Go to component demo' />
      {/* <TouchableOpacity onPress= {() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button onPress= { () => navigation.navigate('hung')} 
        title = 'Demo'
      />
        <Button onPress= { () => navigation.navigate('Image')} 
        title = 'Go to Image demo'
      />
         <Button onPress= { () => navigation.navigate('Counter')} 
        title = 'Go to Counter demo'
      />
      <Button onPress= { () => navigation.navigate('Color')} 
        title = 'Go to Color demo'
      />
  </View> 
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
