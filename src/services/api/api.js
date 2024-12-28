// services/api.js
// check for goit commit
//const API_URL = 'https://example.com/api/endpoint';  // Replace with your actual API URL
const API_URL = "https://reactnative.dev/movies.json";
// POST API call function using fetch
export const postData = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Content-Type for JSON payload
      },
      body: JSON.stringify(data), // Convert data object to JSON string
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json(); // Parse JSON response
    return responseData;
  } catch (error) {
    console.error("API error:", error);
    throw error; // Rethrow to be caught by the component
  }
};

export const getData = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json(); // Parse JSON response
    return responseData;
  } catch (error) {
    console.error("API error:", error);
    throw error; // Rethrow to be caught by the component
  }
};
