import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomSidebarMenu from '../screens/Customsidebarmenu';
import  DashboardScreen  from "../screens/DashboardScreen";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: DashboardScreen },
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName: "Home",
  }
);
