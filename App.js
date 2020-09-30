import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import HomeScreen from "./screens/Home";
import CreateEmployee from "./screens/CreateEmployee";
import ProfileScreen from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  const myOptions = {
    title: "My home",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#099aaa",
    },
  };
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <CreateEmployee /> */}
      {/* <ProfilePage /> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={myOptions} />
        <Stack.Screen
          name="CreateEmployee"
          component={CreateEmployee}
          options={{ ...myOptions, title: "Create Employee" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ ...myOptions, title: "User Profile" }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: Constants.statusBarHeight,
  },
});
