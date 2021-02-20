import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Go to BoxScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        marginHorizontal: 20,
        marginVertical: 20

    }
});

export default BoxScreen;