import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppText from '../components/AppText';
import Header from '../components/Header';
import ServerCard from '../components/ServerCard';
const arr = [
  {id: 'I', name: 'Ospring', cash: '1000PLN'},
  {id: 'II', name: 'Borekk', cash: '1000PLN'},
  {id: 'III', name: 'k3zzy', cash: '1000PLN'},
  {id: 'IV', name: 'Rager_', cash: '1000PLN'},
  {id: 'V', name: 'HappyGFX', cash: '1000PLN'},
];

const arr2 = [
  {id: 'I', name: 'Sowa', cash: '1000PLN'},
  {id: 'II', name: 'Sohan', cash: '1000PLN'},
  {id: 'III', name: 'rijzy', cash: '1000PLN'},
  {id: 'IV', name: 'Ranger', cash: '1000PLN'},
  {id: 'V', name: 'mentor', cash: '1000PLN'},
];
export default function TopServers() {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />
      <Header />
      <View
        style={{
          backgroundColor: 'rgba(52, 52, 52, 0.8)',

          paddingBottom: hp(5),
          height: hp(85),
          marginTop: -hp(82),
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <Text
          style={{
            fontSize: 22,
            color: Colors.white,
            fontWeight: '700',
            padding: wp(10),
          }}>
          Topki serwerowe
        </Text>
        <ScrollView>
          <Text
            style={{
              fontSize: 13,
              color: Colors.gray,
              fontWeight: '400',
              paddingHorizontal: wp(10),
              textAlign: 'right',
            }}>
            Wykonanych pieniędzy
          </Text>
          {arr.map(data => {
            return (
              <ServerCard id={data.id} name={data.name} cash={data.cash} />
            );
          })}
          <Text
            style={{
              fontSize: 13,
              color: Colors.gray,
              fontWeight: '400',
              paddingHorizontal: 30,
              marginTop: hp(3),
              textAlign: 'right',
            }}>
            Wykonanych pieniędzy
          </Text>
          {arr2.map(data => {
            return (
              <ServerCard id={data.id} name={data.name} cash={data.cash} />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
