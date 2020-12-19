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
      <Text style={styles.slogan}>Empowering Parents to Nurture Children</Text>
      <Text style={styles.slogan}>and Build Stronger Families</Text>
      <Text style={styles.title}>WELCOME</Text>
      <Text style={styles.description}>We offer free immediate parent support services through our 24/7 Helpline and Parent Support groups.</Text>
      <Text style={styles.description}>All resources we will provide are free and confidential.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title = "NewsLetter" onPress={() => navigate('NewsPaper')}></Button>
      <Button title="Call Stress Line" color="#205BB5"  onPress= {()=> Linking.openURL('tel:+18006328188')}  accessibilityLabel="Call the 24/7 stressline from your phone"/>
      <TouchableOpacity onPress= {()=> Linking.openURL('https://www.networkforgood.org/donation/ExpressDonation.aspx?ORGID2=042657321&vlrStratCode=eRlCiRtNcKXhjfkf6kZ0AeNSNP%2bPrhKg0As6iIOlzYE4GxFLiqnY4fCEM2ylS0av')} style={styles.donateButton}>
        <Text style={styles.donateButtonText}>Donate/Support US</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> Linking.openURL('https://www.parentshelpingparents.org/new-info')} style={styles.Button}>
        <Text style={styles.ButtonText}>Sign up for our newsletter</Text>
      </TouchableOpacity>
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
    fontSize: 45,
    fontWeight: 'bold',
    color: '#205BB5',
  },
  slogan: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  description: {
    fontSize: 14,
    alignItems: 'center',
  },
  donateButton: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    padding : 20,
  },
  donateButtonText: {
    fontSize: 24,
    color: '#205BB5',
    fontWeight: 'bold',
  }, 
  Button: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
  },
  ButtonText: {
  margin: 4,
  paddingHorizontal: 6,
  textAlign: "center",
  backgroundColor: "white",
  color: '#000000',
  fontSize: 20,
  }, 
  
});

