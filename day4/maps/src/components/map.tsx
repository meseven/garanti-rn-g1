import { AppleMaps, GoogleMaps } from "expo-maps";
import { useEffect, useState } from "react";
import { Platform, Text } from "react-native";
import * as Location from "expo-location";

export default function Map() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  if (Platform.OS === "ios") {
    return (
      <AppleMaps.View
        style={{ flex: 1 }}
        cameraPosition={{
          coordinates: {
            latitude: location?.coords.latitude || 51.5074,
            longitude: location?.coords.longitude || -0.1275,
          },
          zoom: 5,
        }}
        markers={[
          {
            coordinates: {
              latitude: location?.coords.latitude || 51.5074,
              longitude: location?.coords.longitude || -0.1275,
            },
            title: "You are here",
          },
          {
            coordinates: {
              latitude: 41.0352411,
              longitude: 29.0065899,
            },
            title: "Istanbul",
          },
        ]}
        polylines={[
          {
            coordinates: [
              {
                latitude: 41.0352411,
                longitude: 29.0065899,
              },
              {
                latitude: location?.coords.latitude,
                longitude: location?.coords.longitude,
              },
              {
                latitude: 51.5074,
                longitude: -0.1275,
              },
              {
                latitude: 41.0352411,
                longitude: 29.0065899,
              },
            ],
          },
        ]}
        uiSettings={{}}
      />
    );
  } else if (Platform.OS === "android") {
    // return <GoogleMaps.View style={{ flex: 1 }}    />;
  } else {
    return <Text>Maps are only available on Android and iOS</Text>;
  }
}
