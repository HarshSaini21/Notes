import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import DashboardScreen from "./screens/DashboardScreen";
import Physics from "./screens/Physics";
import Motion from "./PhysicsNotes/Motion";

const Stack = createStackNavigator();

export default class AppStackNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DashBoardScreen">
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          <Stack.Screen name="Physics" component={Physics} />
          <Stack.Screen name="Motion" component={Motion} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
