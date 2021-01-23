/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ChildView from '../../components/ChildView';
const ChildCare = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.headerTitle}> Children Information </Text>
          <View>
            <Text>
              You can choose which children want to apply by clicking on their name and editing the
              information by clicking on the pen icon
            </Text>
          </View>
        </View>
        <View>
          <ChildView
            childName="Wesley Perry"
            iconName="ic-boy"
            iconColor="#32A4FC"
            allergies="No"
            specialNeed=" No"
            hidden={false}
          />
          <ChildView
            childName="Kathryn Murphy"
            iconName="ic-girl"
            iconColor="#DB147F"
            allergies="No"
            specialNeed=" No"
            hidden={true}
          />
        </View>
        <View style={{ marginTop: 30, marginBottom: 40 }}>
          <Text style={styles.textAdd}>+ Add New Child</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: 300,
              height: 48,
              backgroundColor: '#DB147F',
              borderRadius: 4,
              marginTop: 0,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginBottom: 40,
            }}
          >
            <Text style={{ color: 'white', fontWeight: '800' }}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textAdd: { fontStyle: 'italic', fontWeight: '800', color: '#000000', fontSize: 17 },
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
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
  },
  container: {
    marginLeft: 20,
    marginEnd: 20,
  },
});
export default ChildCare;
