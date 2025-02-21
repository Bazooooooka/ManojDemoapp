import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

// API call function
const fetchFruits = (pageId) => {
  return axios.get(`http://localhost:4000/fruits/?_limit=4&_page=${pageId}`);
};

export const PaginatedQueries = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fruits", page],
    queryFn: () => fetchFruits(page),
    placeholderData: [],
  });

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
    <View style={styles.container}>
      <FlatList
        data={data?.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.fruitItem}>
            <Text style={styles.fruitText}>{item.name}</Text>
          </View>
        )}
      />

      {/* Pagination Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, page === 1 && styles.disabledButton]}
          onPress={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          <Text style={styles.buttonText}>Prev Page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, page === 5 && styles.disabledButton]}
          onPress={() => setPage((prev) => prev + 1)}
          disabled={page === 5}
        >
          <Text style={styles.buttonText}>Next Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
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
  },
  fruitText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
