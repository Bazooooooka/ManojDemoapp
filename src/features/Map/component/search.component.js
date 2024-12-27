import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { useContext, useState, useEffect } from "react";
import { LocationContext } from "../../../services/location/location.context";
const SearchContainerView = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
  position: absolute;
  z-index: 999;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyWord] = useState(keyword);

  useEffect(() => {
    setSearchKeyWord(keyword);
  }, [keyword]);

  return (
    <SearchContainerView>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyWord}
        icon="map"
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
