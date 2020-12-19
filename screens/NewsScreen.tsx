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
export default function NewsScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Our Newsletter</Text>
      <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" />  
      
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

