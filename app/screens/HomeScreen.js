import {View, Image, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../constants/Colors';
import AppText from '../components/AppText';
export default function Home() {
  return (
    <>
      <View
        style={{
          height: hp(100),
          backgroundColor: Colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar backgroundColor={Colors.primary} />
        <Image
          style={{height: 150, width: 150, marginVertical: hp(2)}}
          source={require('../assets/icons/logo.png')}
        />
        <TouchableOpacity onPress={() => console.log('swój nick..')}>
          <View
            style={{
              backgroundColor: '#4A2C2B',
              flexDirection: 'row',
              width: wp(85),
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: hp(7),
              borderRadius: 10,
            }}>
            <Image
              style={{marginRight: wp(3), marginLeft: wp(6)}}
              source={require('../assets/icons/box-arrow-in-le.png')}
            />
            <AppText size={2.2} fontWeight={'600'} style={{color: Colors.sec}}>
              Wpisz swój nick..
            </AppText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Kontynuuj')}>
          <View
            style={{
              marginTop: hp(3),
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              width: wp(85),
              alignItems: 'center',
              justifyContent: 'center',
              height: hp(7),
              borderRadius: 10,
            }}>
            <AppText
              size={2.2}
              fontWeight={'600'}
              style={{color: Colors.white}}>
              Kontynuuj
            </AppText>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1.5),
            marginRight: wp(16),
          }}>
          <AppText size={1.4} style={{color: Colors.gray}}>
            Mam problem z zalogowaniem się.
          </AppText>
          <TouchableOpacity onPress={() => console.log('Skontaktuj się')}>
            <AppText size={1.4} style={{color: Colors.sec, marginLeft: wp(2)}}>
              Skontaktuj się
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={{position: 'absolute', top: hp(2), left: -wp(7)}}
        source={require('../assets/icons/gold.png')}
      />
      <Image
        style={{position: 'absolute', top: hp(13), right: -wp(24)}}
        source={require('../assets/icons/gold.png')}
      />
      <Image
        style={{position: 'absolute', top: hp(73), right: -wp(15)}}
        source={require('../assets/icons/gold.png')}
      />
      <Image
        style={{position: 'absolute', top: hp(73), left: -wp(25)}}
        source={require('../assets/icons/gold.png')}
      />
    </>
  );
}
