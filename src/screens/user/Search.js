/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ServiceType from '../../components/ServiceType';
import SliderItem from '../../components/SliderItem';
import Quality from '../../components/Quality';
import Icon from 'react-native-vector-icons/kindicare';
import DropDownPicker from 'react-native-dropdown-picker';
import ChildCare from './ChildCare';
import { Navigation } from 'react-native-navigation';
const Search = (props) => {
  // onFindChildcare= () =>{

  // }
  return (
    <ScrollView>
      <View style={styles.locationView}>
        <Icon name="ic-pinmap2" size={23} />
        <Text style={styles.locationText}>6 Leigh Place, West Pennant Hills...</Text>
        <TouchableWithoutFeedback>
          <Text style={styles.changeLocationText}>Change</Text>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <Text style={styles.serviceTypeText}> Choose Service Type</Text>
        <View style={styles.containerServiceType}>
          <ServiceType name="ic-baby" title="Child Care Centre" color="black" check={false} />
          <ServiceType
            name="ic-abc"
            title="Pre-school & Kindergarten"
            color="#DB147F"
            check={true}
          />
          <ServiceType name="ic-family" title="Family Day Care" color="black" check={false} />
          <ServiceType
            name="ic-bag"
            title="Before & After School Care"
            color="black"
            check={false}
          />
        </View>
      </View>
      <View>
        <SliderItem
          name="ic-kindi"
          title="KindiCare Rating"
          numberMin="8.0"
          numberMax="10.0"
          size={23}
        />
        <SliderItem
          name="ic-2pinmap"
          size={23}
          title="The shorted distance from home"
          numberMin="0 km"
          numberMax="50 km"
        />
      </View>
      <View>
        <View style={styles.headerValueView}>
          <Icon name="ic-moneyflower" size={23} />
          <Text style={styles.titleHeaderValue}>Value For Money For The Area</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 28 }}>
          <Quality quality="Good" />
          <Quality quality="Very Good" />
          <Quality quality="Excellent" />
        </View>
        <View style={{ marginTop: -25 }}>
          <SliderItem
            name="ic-cost"
            title="Cost Per Day"
            numberMin="$55"
            numberMax="$127"
            size={23}
          />
        </View>
      </View>
      <View>
        <View style={styles.headerValueView}>
          <Icon name="ic-nqsrating" size={23} />
          <Text style={styles.titleHeaderValue}>National Quality Standard Rating</Text>
        </View>
        <View>
          <DropDownPicker
            items={[
              {
                label: 'Exceeding or Excellent NQS',
                value: 'item1',
                hidden: true,
              },
              { label: 'Meeting NQS', value: 'item2' },
              {
                label: 'Working Towards NQS',
                value: 'item3',
              },
              {
                label: 'Significant Improvement Required',
                value: 'item4',
              },
              {
                label: 'Not Rated or Provisional Rating',
                value: 'item5',
              },
            ]}
            defaultValue="item1"
            containerStyle={{ height: 40 }}
            style={{ borderColor: '#DB147F', marginLeft: 28, marginRight: 28 }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{ borderColor: '#DB147F', marginLeft: 28, marginRight: 28, width: 304 }}
          />
        </View>
      </View>
      <View>
        <View style={styles.headerValueView}>
          <Icon name="ic-sort" size={23} />
          <Text style={styles.titleHeaderValue}>Sort Results By</Text>
        </View>
        <View>
          <DropDownPicker
            items={[
              {
                label: 'Highest KindiCare Rating',
                value: 'item1',

                hidden: true,
              },
              { label: 'Featured', value: 'item2' },
              {
                label: 'Shortest Distance',
                value: 'item3',
              },
              {
                label: 'Date Of Rating',
                value: 'item4',
              },
            ]}
            defaultValue="item1"
            hidden={true}
            containerStyle={{ height: 40 }}
            style={styles.dropView}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{
              borderColor: '#DB147F',
              marginLeft: 28,
              marginRight: 28,
              width: 304,
              color: '#DB147F',
            }}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            width: 300,
            height: 48,
            backgroundColor: '#DB147F',
            borderRadius: 4,
            marginTop: 70,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            marginBottom: 70,
          }}
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'ChildCare',
                options: {
                  topBar: {
                    title: {
                      text: 'Application',
                    },
                  },
                },
              },
            })
          }
        >
          <Text>Find Childcare</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  dropView: { borderColor: '#DB147F', marginLeft: 28, marginRight: 28 },
  titleHeaderValue: {
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
  headerValueView: {
    flexDirection: 'row',
    marginLeft: 28.23,
    marginTop: 10,
    marginBottom: 20,
  },
  // container: {
  //   flex: 1,
  // },
  locationView: {
    flexDirection: 'row',
    paddingLeft: 23,
    paddingTop: 16,
    fontSize: 14,
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#2D1F21',
    lineHeight: 23,
    letterSpacing: 0.002,
    textAlign: 'left',
    marginLeft: 10,
  },
  changeLocationText: {
    paddingRight: 20,
    marginLeft: 22,
    fontFamily: 'SF Pro Text',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: 0.002,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    color: '#DB147F',
  },
  serviceTypeText: {
    marginTop: 15,
    marginBottom: -25,
    marginLeft: 23,
    width: 183,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 23,
    alignItems: 'center',
    letterSpacing: 0.02,
    color: '#DB147F',
  },
  containerServiceType: {
    marginTop: 25,
    marginLeft: 23,
    marginRight: 35,
    flexDirection: 'row',
  },
});
export default Search;
Navigation.registerComponent('ChildCare', () => ChildCare);
