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
      <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" /> 
      <Text style={styles.title}>WELCOME</Text>
      <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" /> 
      <Text style={styles.description}>We offer free immediate parent support services through our 24/7 Helpline and Parent Support groups.</Text>
      <Text style={styles.description}>All resources we will provide are free and confidential.</Text>
      <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" /> 
      <TouchableOpacity onPress={() => navigate('PhoneTextSupport')} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Text and Phone Support</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('SupporGroup')} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>    Support Group     </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('NewsPaper')} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>         News         </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('SupportUs')} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>      Support US      </Text>
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
    
});

