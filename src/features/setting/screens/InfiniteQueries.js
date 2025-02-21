import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from "react-native";

// API URL (Use a Config File in Real Projects)
const API_URL = "http://10.0.2.2:4000";

// Fetch Function
const fetchFruits = ({ pageParam }) => {
  return axios.get(`${API_URL}/fruits?_limit=10&_page=${pageParam}`);
};

export const InfiniteQueries = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["fruits"],
    queryFn: fetchFruits,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length < 5 ? allPages.length + 1 : undefined;
    },
    retry: 2, // Retry API call 2 times before failing
  });

  // Combine paginated data
  const fruits = data?.pages?.flatMap((page) => page.data) || [];

  // Function to fetch more data
  const handleFetchMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading Fruits...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={fruits}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.fruitItem}>
          <Text style={styles.fruitText}>{item.name}</Text>
        </View>
      )}
      onEndReached={handleFetchMore}
      onEndReachedThreshold={0.5}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
      ListFooterComponent={() =>
        isFetchingNextPage ? (
          <ActivityIndicator size="small" color="blue" />
        ) : null
      }
    />
  );
};

// Styles
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  fruitItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "lightblue",
    borderRadius: 8,
    alignItems: "center",
  },
  fruitText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
