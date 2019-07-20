import React, { Component } from "react";
import PropTypes from "prop-types";
import MapScreen from "./presenter";
import { Alert } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { t } from "../../services/i18n";

class Container extends Component {
  state = {
    isLoading: false,
    mapRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    locationResult: null,
    location: { coords: { latitude: 37.78825, longitude: -122.4324 } },
    markers: []
  };

  static propTypes = {
    addFavorite: PropTypes.func.isRequired,
    removeFavroite: PropTypes.func.isRequired
  };

  componentDidMount() {
    this._getLocationAsync();
    // this._getBikeStationList();
    this._getDeajonBikeSationList();
    console.log("넘어가?");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.locationList.length !== this.props.locationList.length) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <MapScreen
        {...this.state}
        handleCalloutPress={this._handleCalloutPress}
        handleMapRegionChange={this._handleMapRegionChange}
      />
    );
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    // console.log(status);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
        location
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location });
  };

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    // this.setState({ mapRegion });
  };

  _getBikeStationList = async () => {
    const result = await fetch(
      `http://openapi.seoul.go.kr:8088/${
        Constants.manifest.extra.bikeApiKey
      }/json/bikeList/1/100/`
    ).then(res => {
      if (res.ok) {
        return res.json();
      }
    });

    const {
      rentBikeStatus: { row }
    } = result;
    this.setState({
      isLoading: true,
      markers: row
    });
    // console.log(row);
  };

  _getDeajonBikeSationList = async () => {
    this.setState({
      isLoading: false
    });

    const result = await fetch(
      `http://www.tashu.or.kr/mapAction.do?process=statusMapView`
    ).then(res => {
      if (res.ok) {
        return res.json();
      }
    });

    const { markers } = result;
    console.log("_getDeajonBikeSationList", typeof markers);

    const updateMarkers = markers.map((item, index) => {
      const { kiosk_no, name, cntRackTotal, cntRentable, lat, lng } = item;
      return {
        stationId: kiosk_no,
        stationName: name,
        rackTotCnt: cntRackTotal,
        parkingBikeTotCnt: cntRentable,
        stationLatitude: lat,
        stationLongitude: lng
      };
    });

    // console.log(updateMarkers);

    this.setState({
      isLoading: true,
      dMarkers: updateMarkers
    });

    console.log("dj bike get location", result);
  };

  _handleCalloutPress = (e, item) => {
    console.log("callotu press", e);

    const { locationList } = this.props;

    let hasFavorite = false;
    if (locationList && locationList.length > 0) {
      for (let index = 0; index < locationList.length; index++) {
        const element = locationList[index];
        console.log(item, element);
        if (element.data[0].id === item.stationId) {
          hasFavorite = true;
          break;
        }
      }
    }

    Alert.alert(
      t("map:favorite"),
      !hasFavorite ? t("map:addFavorite") : t("map:removeFavorite"),
      [
        {
          text: t("alert:cancel"),
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: t("alert:ok"),
          onPress: () => {
            const { addFavorite, removeFavroite } = this.props;
            if (!hasFavorite) {
              addFavorite(item);
            } else {
              removeFavroite(item.stationId);
            }
          }
        }
      ]
    );
  };
}

export default Container;
