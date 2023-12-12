//Created by Ankith Goutham
//imports
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';
//LocationScreen
const LocationScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [recyclingCenters, setRecyclingCenters] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      const API_KEY = 'AIzaSyC4DOr6-Y1o-eyayksHqdMjrb3YnrSxFto';
      const radius = 20 * 1609.34;
      const placesEndpoint = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude},${location.coords.longitude}&radius=${radius}&keyword=recycling&key=${API_KEY}`;

      fetch(placesEndpoint)
        .then((response) => response.json())
        .then((data) => {
          const centers = data.results;
          setRecyclingCenters(centers);
        })
        .catch((error) => {
          console.error('Error fetching recycling centers:', error);
        });
    })();
  }, []);

  return (
    <View style={styles.container}>
      {userLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Your Location"
          />

          {recyclingCenters.map((center, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: center.geometry.location.lat,
                longitude: center.geometry.location.lng,
              }}
              title={center.name}
              description={center.vicinity}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};
//map style
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
  },
});
//LocationScreen
export default LocationScreen;
