import React, { useReducer } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;

const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "change_red":
        return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
      case "change_green":
        return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
      case "change_blue":
        return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({
            type: "change_red",
            amount: COLOR_INCREMENT,
          })
        }
        onDecrease={() =>
          dispatch({
            type: "change_red",
            amount: -1 * COLOR_INCREMENT,
          })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({
            type: "change_blue",
            amount: COLOR_INCREMENT,
          })
        }
        onDecrease={() =>
          dispatch({
            type: "change_blue",
            amount: -1 * COLOR_INCREMENT,
          })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({
            type: "change_green",
            amount: COLOR_INCREMENT,
          })
        }
        onDecrease={() =>
          dispatch({
            type: "change_green",
            amount: -1 * COLOR_INCREMENT,
          })
        }
        color="Green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({});

export default SquareScreen;
