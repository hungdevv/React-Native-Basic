import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TextComponent } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text> Enter My Password: </Text>
            <TextInput  
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 5 ? <Text>Password must be 5 characters</Text>: null}
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