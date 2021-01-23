/* eslint-disable no-shadow */
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
const DayCare = (props) => {
  var check = props.check;
  const onCheck = () => {
    if (check === true) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <TouchableWithoutFeedback onPress={(check) => onCheck()} check={props.check}>
      <View style={!onCheck() ? styleItem.item : styleItem.itemCheck}>
        <Text style={!onCheck() ? styleItem.text : styleItem.textCheck}>{props.day}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styleItem = StyleSheet.create({
  item: {
    borderRadius: 25,
    width: 30,
    height: 30,
    // borderColor: color,
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  itemCheck: {
    borderRadius: 25,
    width: 30,
    height: 30,
    borderColor: '#DB147F',
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#DB147F',
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: 'black',
  },
  textCheck: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: 'white',
  },
});
export default DayCare;
