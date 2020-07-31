import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Permissions from 'expo-permissions';

import * as Location from 'expo-location'
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import axios from 'axios';


// import './components/permissions'
// import { useState } from 'react';









export default function App() {

    // const { permissions, setPermissions } = useState(false);
    const [location, setLocation] = useState({});
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    useEffect( async () => {
       (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        setLat(location.coords.latitude);
        setLong(location.coords.longitude);
      })();
      let url = 
      let res = await 

    }, []);
  
    let text = 'Waiting..';
    // if (errorMsg) {
    //   text = errorMsg;
    // } else 
    if (location) {
      text = JSON.stringify(location);
    }


    // const getLocation = async() => {
    //   let currentLocation = await Location.getCurrentPositionAsync({});
    //   setLocation({currentLocation});

    //   console.log('CURRENT LOCATION', currentLocation);
    // }

    
  
    // const forRealGetPermissions = async () => {
    //   const { status }  = await Permissions.askAsync(Permissions.LOCATION);

    //   setPermissions(true);
    // }
  

    // useEffect(() => {
    //   forRealGetPermissions();
    // },[]);

    // useEffect(() => {
    //   getLocation();
    // })

   
    


    console.log('LOCATION', location);
    console.log('LATITUDE', lat);
    console.log('LONGITUDE', long);


  return (
    <View style={styles.container}>
      <Text>Mermaids and Unicorns</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});