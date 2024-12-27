import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { useContext, useState, useEffect } from "react";
import { LocationContext } from "../../../services/location/location.context";
const SearchContainerView = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`;
export const Search = ({ isToggelFavourite, toggelFavourites }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyWord] = useState(keyword);
  useEffect(() => {
    setSearchKeyWord(keyword);
  }, [keyword]);
  return (
    <SearchContainerView>
      <Searchbar
        icon={isToggelFavourite ? "heart" : "heart-outline"}
        onIconPress={toggelFavourites}
        placeholder="Search for a location"
        value={searchKeyWord}
        onSubmitEditing={() => {
          search(searchKeyWord);
        }}
        onChangeText={(text) => {
          setSearchKeyWord(text);
        }}
      />
    </SearchContainerView>
  );
};
