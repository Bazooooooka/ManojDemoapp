import { Text } from "react-native-paper";
import { SafeArea } from "../../components/utility/safe-area.component";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { getData } from "../../../services/api/api";
import { Movie } from "../../../services/api/api.model";
import { getDeviceId } from "../../components/utility/utils";
export const FetchDataScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const apiResponse = await getData();
      setData(apiResponse.movies); // Handle the successful response
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Stop the loading indicator
    }
  };
  useEffect(() => {
    const fetchDeviceId = async () => {
      try {
        const id = await getDeviceId();
        console.log("Unique device id: ", id);

        //setDeviceId(id);
      } catch (error) {
        console.error("Error fetching device ID:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeviceId();

    getMovies();
  }, []);

  return (
    <SafeArea>
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
    </SafeArea>
  );
};
