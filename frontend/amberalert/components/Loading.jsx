import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching data) that takes some time
    const fetchData = async () => {
      try {
        // Simulate a delay of 2000 milliseconds (2 seconds)
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Once the data is fetched or any other loading task is done, set isLoading to false
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors if needed
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading Screen</Text>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text>Loading complete! Your content goes here.</Text>
          {/* Add more content as needed */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default LoadingScreen;