import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/imageDetail';
const ImageScreen = () => {
    return (
    <View>
        <ImageDetail title="Forest"/>
        <ImageDetail title="Beach"/>
        <ImageDetail title="Forest"/>
        <ImageDetail title="Mountain"/>
        <ImageDetail title="Forest"/>
    </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;