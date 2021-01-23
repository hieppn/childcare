/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/kindicare';
import Slider from 'react-native-slider';
const SliderItem = (props) => {
  return (
    <View>
      <View style={styleSlider.headerRateView}>
        <Icon name={props.name} color={props.color} size={props.size} />
        <Text style={styleSlider.titleHeader}>{props.title}</Text>
      </View>
      <View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text
            style={{
              marginLeft: 28,
              fontFamily: 'Mulish',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 18,
              lineHeight: 23,
              alignItems: 'center',
              letterSpacing: 0.02,
              color: '#2D1F21',
            }}
          >
            {props.numberMin}
          </Text>
          <Text
            style={{
              marginRight: 20,
              fontFamily: 'Mulish',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 18,
              lineHeight: 23,
              alignItems: 'flex-end',
              letterSpacing: 0.02,
              color: '#2D1F21',
              textAlign: 'right',
              marginLeft: 240,
            }}
          >
            {props.numberMax}
          </Text>
        </View>
        <Slider
          style={{
            marginTop: 7,
            width: 300,
            height: 20,
            marginLeft: 10,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#DB147F"
          maximumTrackTintColor="grey"
          thumbTintColor="grey"
        />
      </View>
    </View>
  );
};
const styleSlider = StyleSheet.create({
  titleHeader: {
    marginLeft: 14.14,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.02,
    color: '#2D1F21',
    alignSelf: 'center',
  },
  headerRateView: {
    flexDirection: 'row',
    marginLeft: 28.23,
    marginTop: 40,
  },
});
export default SliderItem;
