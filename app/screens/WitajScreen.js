import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Colors from '../constants/Colors';
import AppText from '../components/AppText';
import Accordion from '../components/AppAccordion';
const SECTIONS = [
  {
    title: 'First',
    content:
      'Lorem ipsum heelow rowfasLorem ipsum heelow rowfas...Lorem ipsum heelow rowfas...Lorem ipsum heelow rowfas...Lorem ipsum heelow rowfas...Lorem ipsum heelow rowfas...Lorem ipsum heelow rowfas...Lorem ipsum heelow rowfas......',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
  {
    title: 'third',
    content: 'Lorem ipsum...',
  },
  {
    title: 'fourth',
    content: 'Lorem ipsum...',
  },
];

const Witaj = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <Image
        style={{
          position: 'absolute',
          top: -hp(4.5),
          left: -wp(8),
        }}
        source={require('../assets/icons/gold.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: wp(7),
        }}>
        <View></View>

        <Image
          style={{
            position: 'absolute',
            top: hp(29),
            right: -wp(22),
          }}
          source={require('../assets/icons/gold.png')}
        />
        <Image
          style={{width: 70, height: 70}}
          source={require('../assets/icons/logo.png')}
        />
        <TouchableOpacity>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/icons/list.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginVertical: hp(2)}}>
        <Image source={require('../assets/icons/Witaj.png')} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Servers')}>
        <View
          style={{
            width: wp(70),
            height: hp(5),
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: 'rgba(85, 193, 66, 0.14901960784313725)',
          }}>
          <Text style={{color: Colors.white, fontSize: 18, fontWeight: '700'}}>
            1185
          </Text>
          <AppText
            size={2.2}
            fontWeight={'700'}
            style={{color: '#16491f', marginRight: wp(2)}}>
            Aktualnie online graczy
          </AppText>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: hp(2),
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Form')}>
          <View
            style={{
              width: wp(50),
              height: hp(5),
              borderRadius: 6,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
            }}>
            <Text style={{color: Colors.white, fontSize: 14}}>
              Odbierz darmowy klucz
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Market')}>
          <View
            style={{
              width: wp(30),
              height: hp(5),
              marginLeft: wp(2),
              borderRadius: 6,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#242D21',
            }}>
            <Image source={require('../assets/icons/shop.png')} />
            <AppText
              size={2.2}
              fontWeight={'700'}
              style={{color: '#16491f', marginRight: wp(2)}}>
              Market
            </AppText>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text
          style={{
            fontSize: 22,
            color: Colors.white,
            fontWeight: '700',
            paddingHorizontal: wp(10),
            paddingVertical: hp(3),
          }}>
          Ogłoszenia serwerowe
        </Text>

        <ScrollView>
          <Accordion section={SECTIONS} />
        </ScrollView>
      </View>
    </View>
  );
};
export default Witaj;
const styles = StyleSheet.create({
  container: {
    height: hp('95%'),
    width: wp('100%'),
    backgroundColor: '#1d191c',
  },
  img1: {
    height: hp(10),
    width: wp(20),
  },
  img2: {
    height: hp(12),
    width: wp(24),
  },
  img3: {
    height: hp(3),
    width: wp(6),
  },
  first: {
    width: wp('70%'),
    height: hp('6%'),
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#16491f',
    marginTop: hp('3%'),
  },
  sm: {
    height: hp(5),
    width: wp(10),
  },
  smm: {
    height: hp(3),
    width: wp(6),
  },
  texta: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#138029',
    marginLeft: wp('5%'),
    fontWeight: '700',
  },
  main: {
    width: wp('100%'),
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: '#292428',
    marginTop: hp('6%'),
    paddingBottom: hp(13),
    height: hp('70%'),
  },
  textb: {
    fontSize: 18,
    marginTop: hp('3%'),
    marginLeft: wp('5%'),
    fontWeight: 'bold',
    color: '#fff',
  },
  cart: {
    backgroundColor: '#1d191c',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('45%'),
    borderRadius: 15,
    marginBottom: hp('2%'),
    padding: 10,
  },
  image1: {
    height: hp('8%'),
    width: wp('16%'),
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },
  desc: {
    color: '#464345',
    padding: 5,
    fontSize: 12,
  },
  btn: {
    width: wp('35%'),
    height: hp('5%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292428',
  },
  textc: {
    fontSize: 15,
    color: '#fff',
  },
});
