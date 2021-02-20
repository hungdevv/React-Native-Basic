import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <View style={styles.boxOneStyle} />
            <View style={styles.boxTwoStyle}/>
            <View style={styles.boxThreeStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 120,
        // alignItems: 'center',
        justifyContent: 'space-between', 

    },
    boxOneStyle: {
        height:60,
        width: 60,
        backgroundColor: 'red',
    },
    boxTwoStyle: {
        height:60,
        width: 60,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
        // marginHorizontal: 20,
        // marginVertical: 20

    },
    boxThreeStyle: {
        height:60,
        width: 60,
        backgroundColor: 'blue',
        right: 0
    }
});

export default BoxScreen;