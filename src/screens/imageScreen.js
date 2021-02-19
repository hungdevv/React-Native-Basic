import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/imageDetail';
const ImageScreen = () => {
    return (
    <ScrollView>
        <ImageDetail 
        title="Forest" 
        imageSource={require('../../assets/forest.jpg')}
        />

        <ImageDetail 
        title="Beach" 
        imageSource={require('../../assets/beach.jpg'
        )}/>

        <ImageDetail 
        title="Forest" 
        imageSource={require('../../assets/forest.jpg'
        )}/>

        <ImageDetail 
        title="Mountain" 
        imageSource={require('../../assets/mountain.jpg'
        )}/>

        <ImageDetail 
        title="Forest" 
        imageSource={require('../../assets/forest.jpg'
        )}/>

        <ImageDetail 
        title="Forest" 
        imageSource={require('../../assets/forest.jpg'
        )}/>
    </ScrollView>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;