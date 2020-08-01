import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Location from 'expo-location'




const getPermissions = async () => {

  // const {location, setLocation} = useState({});
  const { permissions, setPermissions } = useState(false);


  const forRealGetPermissions = async () => {
    const { status }  = await Permissions.askAsync(Permissions.LOCATION);
    setPermissions(true);
  }

  useEffect(() => {
    forRealGetPermissions();
  });
  
}

export default getPermissions;



const getLocation = async() => {
  const currentLocation = await Location.getLocationAsync();

//   console.log('location', currentLocation);
// }


