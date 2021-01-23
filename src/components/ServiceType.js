/* eslint-disable no-shadow */
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/kindicare';
const ServiceType = (props) => {
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
      <View>
        <View style={!onCheck() ? styleItem.item : styleItem.itemCheck}>
          <Icon name={props.name} color={props.color} size={23} />
        </View>
        <Text style={!onCheck() ? styleItem.text : styleItem.textCheck}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styleItem = StyleSheet.create({
  item: {
    borderRadius: 25,
    width: 50,
    height: 50,
    // borderColor: color,
    borderWidth: 1,
    marginTop: 25,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  itemCheck: {
    borderRadius: 25,
    width: 50,
    height: 50,
    borderColor: '#DB147F',
    borderWidth: 1,
    marginTop: 25,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    width: 80,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 11,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: '#ABA7A7',
  },
  textCheck: {
    width: 80,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 11,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: '#DB147F',
  },
});
export default ServiceType;
