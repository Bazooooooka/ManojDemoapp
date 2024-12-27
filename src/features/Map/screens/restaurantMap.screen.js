import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, MapCallout } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../component/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCalloutViewComp } from "../component/map-callout.component";
const MapViewComponent = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapViewScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { lat, lng, viewport } = location;
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northEastDelta = viewport.northeast.lat;
    const southWestDelta = viewport.southwest.lat;
    setLatDelta(northEastDelta - southWestDelta);
  }, [location, latDelta]);
  return (
    <>
      <Search />
      <MapViewComponent
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapCallout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <MapCalloutViewComp restaurant={restaurant} />
              </MapCallout>
            </Marker>
          );
        })}
      </MapViewComponent>
    </>
  );
};
