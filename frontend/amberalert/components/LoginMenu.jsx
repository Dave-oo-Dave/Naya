import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import ActiveAlerts from "./ActiveAlerts";
import SolvedList from "./SolvedList";
import MissingPerson from "./MissingPerson";

const LoginMenu = () => {
  const [currentPage, setCurrentPage] = useState("Menu");

  const renderPage = () => {
    switch (currentPage) {
      case "ActiveAlerts":
        return <ActiveAlerts />;
      case "SolvedList":
        return <SolvedList />;
      case "MissingPerson":
        return <MissingPerson />;
      default:
        return renderMenu();
    }
  };

  const renderMenu = () => (
    <View style={styles.container}>
      <Button
        title="Active Alerts"
        onPress={() => setCurrentPage("ActiveAlerts")}
        color="#DA2222"
      />
      <br></br>
      <Button
        title="Solved Lists"
        onPress={() => setCurrentPage("SolvedList")}
        color="#0FCB5A"
      />
      <br></br>
      <Button
        title="Create Form"
        onPress={() => setCurrentPage("MissingPerson")}
        color="#DD8E17"
      />
      <br></br>
    </View>
  );

  return renderPage();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: 412,
  },
});

export default LoginMenu;
