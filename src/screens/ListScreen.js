import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    // return <Text>List Screen</Text>;
    const friends = [
        {name: 'Hung1'},
        {name: 'Hung2'},
        {name: 'Hung3'},
        {name: 'Hung4'},
        {name: 'Hung5'},
        {name: 'Hung6'},
        {name: 'Hung7'},

    ];
    return (
    <FlatList 
        data={friends} 
        renderItem={({item}) => {
            return <Text>{item.name}</Text>
        }}
        />
    );
};

const styles = StyleSheet.create({});

export default ListScreen;