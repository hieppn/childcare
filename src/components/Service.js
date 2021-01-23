/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Service = (props) => {
  var check = props.check;
  const onCheck = () => {
    if (check === true) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <TouchableOpacity onPress={() => onCheck()} check={props.check}>
      <View style={!onCheck() ? styleItem.item : styleItem.itemCheck}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={!onCheck() ? styleItem.text : styleItem.textCheck}>{props.day}</Text>
          <Text style={!onCheck() ? styleItem.textPrice : styleItem.textCheckPrice}>
            {props.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styleItem = StyleSheet.create({
  item: {
    width: '100%',
    backgroundColor: '#F2F2F2',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 5,
  },
  itemCheck: {
    width: '100%',
    marginTop: 10,
    alignSelf: 'center',
    padding: 5,
    borderRadius: 5,
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
  textPrice: {
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
    marginLeft: 210,
  },
  textCheckPrice: {
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
    marginLeft: 210,
  },
});
export default Service;
