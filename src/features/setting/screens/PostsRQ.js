import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

// API Calls
const fetchPosts = () => axios.get("http://localhost:4000/posts"); // Update for device
const addPost = (post) => axios.post("http://localhost:4000/posts", post);

export const PostsRQ = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const queryClient = useQueryClient();

  // Fetch Posts
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    //enabled: false, auto load disabled
    staleTime: 10000,
    refetchInterval: 10000, //refecth after every 10000 mili sec
    refetchIntervalInBackground: true, //allow data fecth in background
  });

  // Add Post
  const { mutate } = useMutation({
    mutationFn: addPost,
    onMutate: async (newPost) => {
      await queryClient.cancelQueries(["posts"]);
      const previousData = queryClient.getQueryData(["posts"]);

      queryClient.setQueryData(["posts"], (oldData) => ({
        ...oldData,
        data: [
          ...oldData?.data,
          { ...newPost, id: String(oldData?.data?.length + 1) },
        ],
      }));

      return { previousData };
    },
    onError: (_error, _post, context) => {
      queryClient.setQueryData(["posts"], context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  // Handle Form Submission
  const handleSubmit = () => {
    if (!title || !body) return;
    mutate({ title, body });
    setTitle("");
    setBody("");
  };

  // Loading state
  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading posts...</Text>
      </View>
    );
  }

  // Error state
  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Form Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter post title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter post body"
        value={body}
        onChangeText={setBody}
      />
      <Button title="Post" onPress={handleSubmit} />

      {/* List of Posts */}
      <FlatList
        data={data?.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postBody}>{item.body}</Text>
          </View>
        )}
      />

      {/* Fetch Button */}
      <TouchableOpacity style={styles.button} onPress={refetch}>
        <Text style={styles.buttonText}>Fetch Posts</Text>
      </TouchableOpacity>
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
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  postItem: {
    backgroundColor: "white",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  postBody: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
