import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Go to BoxScreen1</Text>
            <Text style={styles.textTwoStyle}>Go to BoxScreen2</Text>
            <Text style={styles.textThreeStyle}>Go to BoxScreen3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'column',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center', 

    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 4,
        alignSelf: 'flex-end',
        // position: 'absolute',
        // bottom: 0
        ...StyleSheet.absoluteFillObject
        // marginHorizontal: 20,
        // marginVertical: 20

    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 4,
        alignSelf: 'flex-start',
        left: 10

        // marginHorizontal: 20,
        // marginVertical: 20

    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        // marginHorizontal: 20,
        // marginVertical: 20
        flex: 2
    }
});

export default BoxScreen;