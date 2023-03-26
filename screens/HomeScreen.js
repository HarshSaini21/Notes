import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform, SafeAreaView, StatusBar } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}> Keep On Study </Text>

                <Text style={styles.text1}> Welcome To Our App </Text>

                <Text style={styles.text2}> To Continue To Our App Press This Button </Text>

                    <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate("SignInScreen")}>
                    <Text style={styles.text3}> Let's Go </Text>
                    </TouchableOpacity>

                    <Text style={styles.text4}> CREATED BY HARSHDEEP </Text>

                    <SafeAreaView style={styles.safeArea} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
   text: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
   },

   text1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
    marginTop: RFValue(100)
   },

   text2: {
    color: "blue",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: RFValue(60)
   },
   text3: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: RFValue(5)
   },

   button: {
    backgroundColor: "darkgreen",
    borderRadius: 50,
    borderWidth: 5,
    width: 209,
    height: 80,
    marginLeft: 130,
    marginTop: RFValue(80)
   },

   safeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  text4: {
    fontSize: 30,
    color: "cyan",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: RFValue(50)
  }


})