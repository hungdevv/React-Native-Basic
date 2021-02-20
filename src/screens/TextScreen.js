import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TextComponent } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text> Text Screen</Text>
            <TextInput  
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
            />
            <Text>Hello {name}</Text>
            {true ? <Text>True</Text>: null}
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