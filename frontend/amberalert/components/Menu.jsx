import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import ActiveAlerts from "./ActiveAlerts";
import SolvedList from "./SolvedList";
import LoginScreen from "./LoginScreen";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState("Menu");

  const renderPage = () => {
    switch (currentPage) {
      case "ActiveAlerts":
        return <ActiveAlerts />;
      case "SolvedList":
        return <SolvedList />;
      case "LoginScreen":
        return <LoginScreen />;
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
        title="Login"
        onPress={() => setCurrentPage("LoginScreen")}
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

export default Menu;