import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

class MapScreen extends PureComponent {
  state = {
    mapRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    locationResult: null,
    location: { coords: { latitude: 37.78825, longitude: -122.4324 } }
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  render() {
    console.log("render map view", this.state);
    return (
      <View style={styles.container}>
        <Text> Map Screen </Text>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onRegionChange={this._handleMapRegionChange}
        >
          <MapView.Marker
            coordinate={this.state.location.coords}
            title="My Marker"
            description="Some description"
          />
        </MapView>
        <Text>Location: {this.state.locationResult}</Text>
      </View>
    );
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    console.log(status);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
        location
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log("current location", location);
    this.setState({ locationResult: JSON.stringify(location), location });
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
});

export default MapScreen;
