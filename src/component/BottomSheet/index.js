import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {BottomSheet} from 'react-native-btr';

import {View, Text} from 'react-native';

import {HP, WP} from '../../constant';
import {TextInput} from 'react-native-gesture-handler';

const BottomSheetComponent = ({show, onHandleClose, name, title}) => {
  console.log('name ****', name);
  return (
    <BottomSheet
      visible={show}
      //setting the visibility state of the bottom shee
      onBackButtonPress={onHandleClose}
      //Toggling the visibility state on the click of the back botton
      onBackdropPress={onHandleClose}
      //Toggling the visibility state
    >
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: 280,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: HP('3'),
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingVertical: HP('1'),
            }}>
            {'Postal Address'}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: WP('5'),
            justifyContent: 'space-between',
            marginTop: HP('3'),
          }}>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#778899',
              width: '49%',
              borderRadius: 5,
            }}>
            <TextInput style={{paddingLeft: 20}} placeholder="Floor / Unit#" />
          </View>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#778899',
              width: '49%',
              borderRadius: 5,
            }}>
            <TextInput style={{paddingLeft: 20}} placeholder="Building Name" />
          </View>
        </View>

        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#778899',
            width: '90%',
            borderRadius: 5,
            marginHorizontal: WP('5'),
            marginTop: HP('1'),
          }}>
          <TextInput style={{paddingLeft: 20}} placeholder="Street Address" />
        </View>

        <View
          style={{
            width: '90%',
            borderRadius: 10,
            marginHorizontal: WP('5'),
            marginTop: HP('2'),
            paddingVertical: HP('2.2'),
            backgroundColor: '#12ABBB',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>{'Add Address'}</Text>
        </View>
      </View>
    </BottomSheet>
  );
};

export default BottomSheetComponent;
