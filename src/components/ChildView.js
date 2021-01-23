/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/kindicare';
import DayCare from './DayCare';
import Service from './Service';
const ChildView = (props) => {
  var onHidden = props.hidden;
  return (
    <View style={styles.childView}>
      <View style={styles.childHeader}>
        <Text style={styles.headerChildText}>{props.childName}</Text>
        <Icon name={props.iconName} color={props.iconColor} size={15} style={{ marginLeft: 10 }} />
        <View
          style={{
            borderColor: '#DB147F',
            borderWidth: 1,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginStart: 250,
            position: 'absolute',
          }}
        >
          <Icon name="ic-pen" color="#DB147F" size={23} style={{ padding: 4 }} />
        </View>
      </View>
      <Text>{props.dayOfBirth}</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text> Allergies: </Text>
          <Text>{props.allergies}</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              textAlign: 'right',
              marginHorizontal: 80,
              marginRight: 0,
            }}
          >
            Special need:
          </Text>
          <Text>{props.specialNeed}</Text>
        </View>
      </View>
      {!onHidden ? (
        <View hidden={props.hidden}>
          <View>
            <Text style={{ marginTop: 10, marginBottom: -10 }}>Day care require:</Text>
            <View style={{ flexDirection: 'row', marginStart: -13, paddingHorizontal: 5 }}>
              <DayCare day="Mon" check={true} />
              <DayCare day="Tus" check={false} />
              <DayCare day="Wed" check={true} />
              <DayCare day="Thu" check={false} />
              <DayCare day="Fri" check={true} />
              <DayCare day="Sat" check={false} />
              <DayCare day="Sun" check={false} />
            </View>
          </View>
          <View>
            <Text style={{ marginTop: 20, marginBottom: -10 }}>Service:</Text>
            <View style={{ paddingTop: 5, paddingBottom: 5, marginTop: 20, marginBottom: 20 }}>
              <Service day="Sun" check={false} price="110$" />
              <Service day="Mon" check={true} price="110$" />
              <Service day="Mon" check={false} price="110$" />
              <Service day="Mon" check={true} price="110$" />
            </View>
          </View>
        </View>
      ) : (
        <View style={{ marginTop: 20 }} />
      )}
    </View>
  );
};

export default ChildView;

const styles = StyleSheet.create({
  headerChildText: {
    fontSize: 20,
  },
  childHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  childView: {
    borderColor: '#DB147F',
    marginTop: 20,
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
});
