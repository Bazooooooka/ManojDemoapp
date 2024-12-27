import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../../../features/components/typography/text.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsInfoCardComponent } from "../../restaurants/components/restaurants-infoCard.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../../restaurants/components/restaurants.list.styles";
import styled from "styled-components/native";

const NoFavourites = styled(SafeArea)`
  align-items: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  // console.log(restaurants);
  return favourites.length > 0 ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <RestaurantsInfoCardComponent restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavourites>
      <Text center>No favourites yet</Text>
    </NoFavourites>
  );
};
