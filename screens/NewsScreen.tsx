import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Component, useState } from "react";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Image, TouchableOpacity, Button} from 'react-native';
import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';

function MyBackButton() {
    const navigation = useNavigation();
  
    return (
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  const DATA = [
    {
      id: 'https://mailchi.mp/718e6e4f74a4/losing-your-cool-while-doing-homeschool',
      title: 'August 18, 2020 - Losing Your Cool While Doing Homeschool?',
    },
    {
      id: 'https://mailchi.mp/a0b018ab2f13/gm77l2anex-1152922',
      title: 'May 5, 2020 - Celebrate Global #Giving Tuesday 2020',
    },
    {
      id: 'https://mailchi.mp/6dbc32e60e36/3cng1vmhz1-1152921',
      title: 'April 3, 2020 - Special Announcement About PHP Services!',
    },
    {
      id: 'https://mailchi.mp/176deefccf2c/3cng1vmhz1-1152897',
      title: 'March 10, 2020 - Spring Newsletter - Volunteer Appreciation Month',
    },
    {
      id: 'https://mailchi.mp/parentshelpingparents/luip7dk7jt-1152829',
      title: 'August 17, 2019 - Enewsletter - Supporting Parents In Prison',
    },
    {
      id: 'https://us10.campaign-archive.com/?u=90b8201df80b496ca2406ba47&id=2fe5cacc58',
      title: 'June 16, 2019 - Enewsletter - June 2019 Michaels Story',
    },
    {
      id: 'https://mailchi.mp/parentshelpingparents/luip7dk7jt-1152797',
      title: 'May 9, 2019 - A moms story at PHP',
    },
    {
      id: 'http://mailchi.mp/parentshelpingparents/luip7dk7jt-1152629',
      title: 'April 2019-  Enewsletter - April 2019',
    },
    {
      id: 'http://mailchi.mp/parentshelpingparents/luip7dk7jt-1152601',
      title: 'March 2019 - Enewsletter - March 2019',
    },
    {
      id: 'http://mailchi.mp/parentshelpingparents/staff-and-volunteer-opportunities-at-php',
      title: 'January 2019 - Become a PHP Staff or Volunteer',
    }
  ];
  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.listtitle}>{item.title}</Text>
    </TouchableOpacity>
  );

export default function NewsScreen({ navigation: { navigate } }) {

  const renderItem = ({ item }) => {;
    return <Item item={item} onPress={()=> Linking.openURL(item.id)}/>;
  };


  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Our News Letter</Text>
      <Text style={styles.description}>Stay updated on what's happening in the world of Parents Helping Parents!</Text>
      <Text style={styles.description}>Subscribe to our e-newsletter below</Text>
      <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" />  
      <TouchableOpacity onPress= {()=> Linking.openURL('')} style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up for Our News Letter</Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" /> 
      <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
      <EditScreenInfo path="/screens/HomeScreen.js" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#205BB5',
  },
  green: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#77A22F',
  }, 
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  description: {
    fontSize: 14,
    alignItems: 'center',
  },
  description2: {
    fontSize: 20,
    alignItems: 'center',
  },
  signupButton: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    padding : 10,
  },
  signupButtonText: {
    margin: 4,
    paddingHorizontal: 6,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
  }, 
  item: {
    padding: 3,
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 15,
    borderWidth: 1,
    margin: 1,
  },
  listtitle: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: 'bold',
  },
  
});

