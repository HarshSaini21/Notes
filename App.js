import { createSwitchNavigator, createAppContainer } from "react-navigation";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import AppDrawerNavigator from "./components/drawernavigator";
import firebase from "firebase";
import { firebaseConfig } from "./config";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const SwitchNav = createSwitchNavigator({
  HomeScreen: { screen: HomeScreen },
  SignInScreen: { screen: SignInScreen },
  Drawer: { screen: AppDrawerNavigator },
  
});

const AppContainer = createAppContainer(SwitchNav);
