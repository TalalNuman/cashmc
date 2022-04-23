import {View, Text} from 'react-native';
import React from 'react';

import Colors from '../constants/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppText from '../components/AppText';
export default function ServerCard({id, name, cash}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.dark,
        width: wp(90),
        height: hp(10),
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: hp(2),
        alignSelf: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AppText size={3} style={{color: Colors.gray}}>
          {id}
        </AppText>
        <AppText size={2.5} style={{color: Colors.white, marginLeft: wp(7)}}>
          {name}
        </AppText>
      </View>

      <AppText size={2.4} style={{color: Colors.sec}}>
        {cash}
      </AppText>
    </View>
  );
}
