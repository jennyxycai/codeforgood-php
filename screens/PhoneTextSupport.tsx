import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View } from '../components/Themed';
import * as Linking from 'expo-linking';
import {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Image, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

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

export default function PhoneTextSupportScreen({ navigation: { navigate } }){
  return(
    <View style={styles.container}>
    <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" /> 
    <Text style={styles.title}>Phone and Text Support</Text>
    <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" /> 
    <Text style={styles.description}>Our 24/7, free, anonymous hotline allows help to be just a phone call or text away for anyone needing support as they care for children.</Text>

    <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" /> 
    <TouchableOpacity onPress={() => navigate('Nothing yet')} style={styles.homeButton}>
      <Text style={styles.homeButtonText}>TEXT SOMEONE NOW</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('Nothing Yet')} style={styles.homeButton}>
      <Text style={styles.homeButtonText}>1-800-632-8188</Text>
    </TouchableOpacity>

    <Text style={styles.green}>CONTACT US</Text>
    <Text style={styles.description}>
    Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?{"\n"}
    A: [desc] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{"\n"}
    Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?{"\n"}
    A: [desc] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>

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
  slogan: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
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
  homeButton: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    padding : 10,
  },
  homeButtonText: {
    fontSize: 18,
    color: '#000000',
  }, 
  green: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#77A22F',
  },
    
});
