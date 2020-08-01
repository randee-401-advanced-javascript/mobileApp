import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Footer from "./components/Footer";
import * as Permissions from "expo-permissions";

import * as Location from "expo-location";
import { disableExpoCliLogging } from "expo/build/logs/Logs";
import axios from "axios";
import MapView, { Marker } from "react-native-maps";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lon: 0,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: location.coords.lat,
          longitude: location.coords.lon,
          error: null,
        });
      },
      (error) => this.setState({ error: error.messsage }),
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 2000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.lat,
            longitude: this.state.lon,
          }}
        >
          <Marker coordinate={this.state} />
        </MapView>
      </View>
    );
    <Footer />;
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

// export default class App extends Component {

//   super(props) {

//     this.satate = {
//       lat: 0,
//       lon: 0,
//     };
//   }

//   componet

// }

// export default function App() {
//   // const { permissions, setPermissions } = useState(false);
//   const [location, setLocation] = useState({});
//   const [lat, setLat] = useState();
//   const [long, setLong] = useState();
//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location.coords);
//       setLat(location.coords.latitude.toFixed(4));
//       setLong(location.coords.longitude.toFixed(4));
//     })();
//   }, []);

//   let text = "Waiting..";
//   // if (errorMsg) {
//   //   text = errorMsg;
//   // } else
//   if (location) {
//     text = JSON.stringify(location);
//   }

//   console.log("LOCATION", location);
//   console.log("LATITUDE", lat);
//   console.log("LONGITUDE", long);
//   console.log("URL", url);
