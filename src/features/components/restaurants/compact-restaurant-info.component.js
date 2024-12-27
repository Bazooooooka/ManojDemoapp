import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";

const CompactImageView = styled.Image`
  width: 100px;
  height: 120px;
  border-radius: 10px;
`;
const CompactWebView = styled(WebView)`
  width: 100px;
  height: 120px;
  border-radius: 10px;
`;

const CompactItem = styled.View`
  pading: 10px;
  max-width: 120px;
  align-item: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  //const { name, photos } = restaurant;
  const ImageView = isMap && isAndroid ? CompactWebView : CompactImageView;
  return (
    <CompactItem>
      <ImageView
        source={{
          uri: restaurant.photos[0],
        }}
      />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </CompactItem>
  );
};
