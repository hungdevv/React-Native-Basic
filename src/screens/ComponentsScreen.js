import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Hung'
    const a = 'Test'
    return(
    <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        <Text style={abc.textStyle}>{a}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
         fontSize: 30,
         color: 'red',
    },
    subHeaderStyle: {
        fontSize: 20
    }
});
const abc = StyleSheet.create({
    textStyle: {
         fontSize: 30,
         color: 'blue',
    }
});

export default ComponentsScreen;