import React, { useState } from 'react';
import { View, StyleSheet, Button, Text} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 20;

const SquareScreen = ()  => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    // const setColor = (color, change) => {
    //     if (color === 'red') {
    //         if (red + change > 255 || red + change < 0) {
    //             return;
    //         } else {
    //             setRed(red + change)
    //         }
    //     }
    // };

    return(
        <View>
           <ColorCounter 
            onIncrease={() => {
                if(red +COLOR_INCREMENT > 255) {
                    return;
                }
                setRed(red + COLOR_INCREMENT)} 
            }
            onDecrease={() => setRed(red - COLOR_INCREMENT)}
            color= "Red"/>
           <ColorCounter 
            onIncrease={() => {
                if(blue +COLOR_INCREMENT > 255) {
                    return;
                }
                setRed(blue + COLOR_INCREMENT)} 
            }
            onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
            color= "Blue"/>
           <ColorCounter 
             onIncrease={() => {
                if(green +COLOR_INCREMENT > 255) {
                    return;
                }
                setRed(green + COLOR_INCREMENT)} 
            } 
            onDecrease={() => setGreen(green - COLOR_INCREMENT)}
            color= "Green"/>

            <View style={
                {height: 150, 
                width: 150, 
                backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>

        </View>
    )
}

const styles = StyleSheet.create({});

export default SquareScreen;