import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import Footer from "./components/Footer";
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
      latitude: 0,
      longitude: 0,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
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
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.014,
            longitudeDelta: 0.012,
          }}
        >
          <Marker coordinate={this.state} />
        </MapView>
      </View>
    );
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
