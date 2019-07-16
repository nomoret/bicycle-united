import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import MapView, { PROVIDER_GOOGLE, Circle } from "react-native-maps";

const MapScreen = props => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0222
        }}
        onRegionChange={props.handleMapRegionChange}
      >
        {props.isLoading &&
          props.markers.map((item, index) => {
            const {
              stationName,
              rackTotCnt, //거치대 수
              parkingBikeTotCnt,
              stationLatitude,
              stationLongitude
            } = item;
            const coords = {
              latitude: Number(stationLatitude),
              longitude: Number(stationLongitude),
              accuracy: 603,
              altitude: 0,
              heading: 0,
              speed: 0
            };

            return (
              <MapView.Marker key={index} coordinate={coords}>
                <MapView.Callout
                  tooltip
                  style={styles.customView}
                  onPress={e => props.handleCalloutPress(e, item)}
                  style={{
                    backgroundColor: "white",
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: "black",
                    shadowOpacity: 1,
                    elevation: 3
                  }}
                >
                  <TouchableHighlight underlayColor="#dddddd">
                    <View>
                      <Text>
                        {stationName}
                        {"\n"}
                        {`남은 자전거 ${parkingBikeTotCnt}`}
                      </Text>
                    </View>
                  </TouchableHighlight>
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        {props.isLoading &&
          props.dMarkers.map((item, index) => {
            const {
              stationName,
              rackTotCnt, //거치대 수
              parkingBikeTotCnt,
              stationLatitude,
              stationLongitude
            } = item;
            const coords = {
              latitude: Number(stationLatitude),
              longitude: Number(stationLongitude),
              accuracy: 603,
              altitude: 0,
              heading: 0,
              speed: 0
            };

            return (
              <MapView.Marker key={index} coordinate={coords}>
                <MapView.Callout
                  onPress={e => {
                    props.handleCalloutPress(e, item);
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 18
                      }}
                    >
                      {stationName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "gray"
                      }}
                    >{`남은 자전거 ${parkingBikeTotCnt}`}</Text>
                  </View>
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        <MyPositionMarker coords={props.location.coords} />
        <Circle
          center={{
            latitude: props.location.coords.latitude,
            longitude: props.location.coords.longitude
          }}
          radius={1000}
          fillColor="rgba(165, 191, 248, 0.49)"
        />
      </MapView>
      {/* <Text>Location: {props.locationResult}</Text> */}
    </View>
  );
};

class MyPositionMarker extends React.Component {
  componentDidMount() {
    this.marker.showCallout();
  }
  render() {
    const {
      coords: { latitude, longitude }
    } = this.props;

    return (
      <MapView.Marker
        coordinate={{
          latitude,
          longitude
        }}
        pinColor="blue"
        title="나의 현 위치"
        description="가까운 곳은 어디에?"
        ref={ref => {
          this.marker = ref;
        }}
      />
    );
  }
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
