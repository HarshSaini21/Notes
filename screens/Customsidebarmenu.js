import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from "react-native";
import { DrawerItem } from "@react-navigation/drawer";

import firebase from "firebase";
require("@firebase/auth");

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            backgroundColor: "orange",
          }}
        >
          <View style={styles.drawerItemsContainer}>
            <DrawerItem {...this.props} />
          </View>
          <View style={styles.logOutContainer}>
            <TouchableOpacity
              style={styles.logOutButton}
              onPress={() => {
                this.props.navigation.navigate("WelcomeScreen");
                firebase.auth().signOut();
              }}
            >
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerItemsContainer: {
      flex: 0.8,
    },
    logOutContainer: {
      flex: 0.2,
      justifyContent: "flex-end",
      paddingBottom: 30,
    },
    logOutButton: {
      height: 30,
      width: "100%",
      justifyContent: "center",
      padding: 10,
    },
    logOutText: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });
  
