import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  Modal
} from "react-native";
import {Header, Icon} from "react-native-elements";
export default class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
   
    };
  }
 
  
  render() {
    return (
      <View>
        <View>
          <Header leftComponent = {<Icon name = "bars" type = "font-awesome" onPress = {()=>{
            this.props.naviagtion.toggleDrawer();
          }}/>}
          centerComponent = {{text: 'DashBoard' , style : {color: 'orange', fontWeight: 'bold', fontSize: 20}}}
          />
          
        </View>
        <View>

            <TouchableOpacity style={styles.button1}>
              <Text style={styles.physics}>Physics</Text>
              </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
              <Text style={styles.chemistry}>Chemistry</Text>
              </TouchableOpacity>

            <TouchableOpacity style={styles.button3}> 
              <Text style={styles.biology}>Biology</Text>
              </TouchableOpacity>
          
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  button: {
    marginTop: 100,
    borderRadius: 20,
    backgroundColor: "red",
    width: 200,
    marginLeft: 150


  },

  maths: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },

  button1: {
    marginTop: -53,
    borderRadius: 20,
    backgroundColor: "blue",
    width: 200,
    marginLeft: 400


  },

  physics: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },

  button2: {
    marginTop: 100,
    borderRadius: 20,
    backgroundColor: "pink",
    width: 200,
    marginLeft: 150


  },

  chemistry: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },

  button3: {
    marginTop: 100,
    borderRadius: 20,
    backgroundColor: "red",
    width: 200,
    marginLeft: 150


  },

  history: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },

  button4: {
    marginTop: 100,
    borderRadius: 20,
    backgroundColor: "orange",
    width: 200,
    marginLeft: 150


  },

  civics: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },

  button5: {
    borderRadius: 20,
    backgroundColor: "neonred",
    width: 200,
    marginLeft: 400


  },

  geography: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },

  button6: {
    marginTop: 100,
    borderRadius: 20,
    backgroundColor: "violet",
    width: 200,
    marginLeft: 150


  },

  quiz: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },

  button7: {
    borderRadius: 20,
    backgroundColor: "green",
    width: 200,
    marginLeft: 400
  },

  biology: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },



})
