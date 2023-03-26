import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default class Physics extends React.Component {
    render(){
     return(
        <View>
            <TouchableOpacity onPress={()=>{
               this.props.navigation.navigate("Motion");
            }}>
               <Text> Understanding Motion </Text>
               
            </TouchableOpacity>
        </View>
     )
   }
}

const styles = Stylesheet.create({

})