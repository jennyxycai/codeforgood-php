import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Image, TouchableOpacity, Button} from 'react-native';
import * as Linking from 'expo-linking';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';

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
    title: 'Boston - Metro',
  },
  {
    id: 'https://mailchi.mp/a0b018ab2f13/gm77l2anex-1152922',
    title: 'Greater Boston',
  },
  {
    id: 'https://mailchi.mp/6dbc32e60e36/3cng1vmhz1-1152921',
    title: 'Metro West',
  },
  {
    id: 'https://mailchi.mp/176deefccf2c/3cng1vmhz1-1152897',
    title: 'Northeast',
  },
  {
    id: 'https://mailchi.mp/parentshelpingparents/luip7dk7jt-1152829',
    title: 'Southeast',
  },
  {
    id: 'https://us10.campaign-archive.com/?u=90b8201df80b496ca2406ba47&id=2fe5cacc58',
    title: 'West',
  },
  {
    id: 'https://mailchi.mp/parentshelpingparents/luip7dk7jt-1152797',
    title: 'Central',
  }
];
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.listtitle}>{item.title}</Text>
  </TouchableOpacity>
);


export default function GroupScreen({ navigation: { navigate } }) {
const renderItem = ({ item }) => {;
  return <Item item={item} onPress={()=> Linking.openURL(item.id)}/>;
};


return (
  <View style={styles.container}>
  <Text style={styles.title}>Parent Support Groups</Text>
    <Text style={styles.description}>Our support groups provide a safe, non-judgmental environment for parents to develop solutions to parenting challenges</Text>
    <View style={styles.separator} lightColor="#FFFFFF" darkColor="#FFFFFF" /> 
    <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
  
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
  // padding: 3,
  marginVertical: 4,
  // marginHorizontal: 4,
  borderRadius: 15,
  borderWidth: 1,
  // margin: 1,
  width: 300,
  fontSize: 20,
},
listtitle: {
  fontSize: 12,
  textAlign: "center",
  fontWeight: 'bold',
},

});

