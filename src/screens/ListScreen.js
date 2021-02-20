import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    // return <Text>List Screen</Text>;
    const friends = [
        {name: 'Hung1',key: '1', age: 30},
        {name: 'Hung2',key: '2', age: 30},
        {name: 'Hung3',key: '3', age: 30},
        {name: 'Hung4',key: '4', age: 30},
        {name: 'Hung5',key: '5', age: 30},
        {name: 'Hung6',key: '6', age: 30},
        {name: 'Hung7',key: '7', age: 30},
        {name: 'Hung7',key: '8', age: 30},
        {name: 'Hung7',key: '9', age: 30},
        {name: 'Hung7',key: '10', age: 30},
        {name: 'Hung7',key: '11', age: 30},
        {name: 'Hung7',key: '12', age: 30},
        {name: 'Hung7',key: '13', age: 30},

    ];
    return (
    <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={true}

        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({item}) => {
            return <Text style= {styles.textStyle}>{item.name} - {item.age}</Text>
        }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        // margin
        // paddingLeft: 50,
        color: 'red'
    }
});

export default ListScreen;