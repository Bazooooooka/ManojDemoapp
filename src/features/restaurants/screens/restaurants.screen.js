import React, { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";

import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsInfoCardComponent } from "../components/restaurants-infoCard.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../components/favouritesBar/favouritesBar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../components/restaurants.list.styles";
import { FadeInView } from "../../components/animations/fade.animation";
export const Loader = styled(ActivityIndicator)`
  margin-left: -25px;
`;
export const LoaderContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScereen = ({ navigation }) => {
  const [focusHistory, setFocusHistory] = useState(["item1", "item2"]);
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  // console.log(restaurants);
  return (
    <SafeArea>
      {isLoading && (
        <LoaderContainer>
          <Loader size={50} animating={true} color={MD2Colors.blue300} />
        </LoaderContainer>
      )}
      <Search
        isToggelFavourite={isToggled}
        toggelFavourites={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} navigation={navigation} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <FadeInView>
              <RestaurantsInfoCardComponent restaurant={item} />
            </FadeInView>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
