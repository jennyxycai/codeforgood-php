import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Image, TouchableOpacity, Button} from 'react-native';
import * as Linking from 'expo-linking';
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
export default function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Support Us</Text>
      <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" />  
      <Text style={styles.description}>Thanks for you support. Here are the ways that you can contribute to Parents Helping Parents</Text>
      <Text style={styles.description}>All resources we will provide are free and confidential.</Text>
      <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" />  
      <TouchableOpacity onPress= {()=> Linking.openURL('https://www.networkforgood.org/donation/ExpressDonation.aspx?ORGID2=042657321&vlrStratCode=eRlCiRtNcKXhjfkf6kZ0AeNSNP%2bPrhKg0As6iIOlzYE4GxFLiqnY4fCEM2ylS0av')} style={styles.donateButton}>
        <Text style={styles.donateButtonText}>Donate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> Linking.openURL('https://www.surveymonkey.com/r/VolunteerApplication-NEW')} style={styles.CollaborateButton}>
        <Text style={styles.CollaborateButtonText}>Volunteer</Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" />  
      <Text style={styles.green}>CONTACT US</Text>
      <Text style={styles.description2}>info@parentshelpingparents.org</Text>
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
  donateButton: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    padding : 10,
  },
  donateButtonText: {
    margin: 4,
    paddingHorizontal: 6,
    fontSize: 28,
    color: '#205BB5',
    fontWeight: 'bold',
    textAlign: "center",
  }, 
  CollaborateButton: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    padding : 10,
  },
  CollaborateButtonText: {
  margin: 4,
  paddingHorizontal: 6,
  textAlign: "center",
  backgroundColor: "white",
  fontSize: 28,
  color: '#205BB5',
  fontWeight: 'bold',
  }, 
  
});

