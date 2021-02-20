import React from 'react';
import { View, Text, StyleSheet, TextInput, TextComponent } from 'react-native';

const TextScreen = () => {
    return (
        <View>
            <Text> Text Screen</Text>
            <TextInput style={styles.input}/>
       </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        color: 'black'
    }
});

export default TextScreen;