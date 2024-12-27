import React from "react";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../components/restaurants/compact-restaurant-info.component";

const MapBaseView = styled.View`
  flex: 1;
`;

export const MapCalloutViewComp = ({ restaurant = {} }) => {
  return (
    <MapBaseView>
      <CompactRestaurantInfo isMap={true} restaurant={restaurant} />
    </MapBaseView>
  );
};
