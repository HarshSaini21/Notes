import * as React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import firebase from "firebase";
require("@firebase/firestore");
require("@firebase/auth");

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isModalVisible: false,
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      class: 9,
    };
  }

  userSignUp = (email, password, confirmpassword) => {
    console.log("fucntion succesfully called!1");
    if (password !== confirmpassword) {
      console.log();
      return Alert.alert("Pasword doesnot match..");
    } else {
      console.log("registering users");
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log("succesfully registered!!");
          firebase.firestore().collection("users").add({
            name: this.state.name,
            email: this.state.email,
            class: this.state.class,
            
          });
          return Alert.alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false }),
            },
          ]);
        });
    }
  };
  /*userSignIn = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        console.log("Successfully signed in");
        this.props.navigation.navigate("DashboardScreen");
      })
      .catch((error) => {
        console.log("Error signing in")
        return Alert.alert(error);
      });
  };*/
  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.textInput3}
            placeholder="Email"
            placeholderTextColor={"grey"}
            keyboardType={"email-address"}
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
          />
          <TextInput
            style={styles.textInput3}
            placeholder="Name"
            placeholderTextColor={"grey"}
            onChangeText={(text) => {
              this.setState({ name: text });
            }}
          />
          <TextInput
            style={styles.textInput3}
            placeholder="Class"
            placeholderTextColor={"grey"}
            value={this.state.class}
            disabled={true}
          />

          <TextInput
            style={styles.textInput4}
            placeholder="Password"
            placeholderTextColor={"grey"}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
            secureTextEntry
          />

          <TextInput
            style={styles.textInput5}
            placeholder="Confirm Password"
            placeholderTextColor={"grey"}
            onChangeText={(text) => {
              this.setState({ confirmpassword: text });
            }}
            secureTextEntry
          />

          <TouchableOpacity
            onPress={() => {
              this.userSignUp(
                this.state.email,
                this.state.password,
                this.state.confirmpassword
              );
              console.log("function called");
            }}
          >
            <Text>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ isModalVisible: false });
            }}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container1}>
        <View style={styles.container}>
          <View>{this.showModal()}</View>
          <Text style={styles.text}> Keep On Study </Text>

          <Text style={styles.text2}> Enter Email </Text>

          <TextInput
            style={styles.textInput1}
            placeholder={"Ex: Rahul823@gmail.com"}
            onChangeText={(text) => this.setState({ email: text })}
            placeholderTextColor={"grey"}
          />

          <Text style={styles.text3}> Enter Password </Text>

          <TextInput
            style={styles.textInput2}
            placeholder={"Ex: Rahul2100"}
            onChangeText={(text) => this.setState({ password: text })}
            placeholderTextColor={"grey"}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              /*this.userSignIn(this.state.email, this.state.password);*/
              this.props.navigation.navigate("DashboardScreen")
            }}
          >
            <Text style={styles.text4}> Sign In </Text>
          </TouchableOpacity>

          <Text style={styles.text5}> Does not Have An Account ? </Text>

          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.setState({ isModalVisible: true });
            }}
          >
            <Text style={styles.text4}> Sign Up </Text>
          </TouchableOpacity>

          <SafeAreaView style={styles.safeArea} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  text: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    color: "red",
  },

  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 60,
    marginLeft: 30,
    color: "black",
  },

  textInput: {
    width: "75%",
    height: 40,
    padding: 10,
    borderWidth: 5,
    borderColor: "#000",
    marginLeft: 35,
    backgroundColor: "#F9FBFC",
    marginTop: 5,
    fontWeight: "bold",
    textAlign: "left",
  },

  text2: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    marginLeft: 30,
    marginTop: 30,
  },

  textInput1: {
    width: "75%",
    height: 40,
    padding: 10,
    borderWidth: 5,
    borderColor: "#000",
    marginLeft: 35,
    backgroundColor: "#F9FBFC",
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "left",
  },

  text3: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    marginLeft: 30,
    marginTop: 50,
  },

  textInput2: {
    width: "75%",
    height: 40,
    padding: 10,
    borderWidth: 5,
    borderColor: "#000",
    marginLeft: 35,
    backgroundColor: "#F9FBFC",
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "left",
  },

  button: {
    width: 150,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#3B71FB",
    marginLeft: 100,
    marginTop: 30,
  },

  text4: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    fontSize: 15,
    color: "#F9FBFC",
  },

  text5: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    marginTop: 18,
    textAlign: "left",
  },

  button1: {
    width: 150,
    height: 50,
    borderRadius: 20,
    backgroundColor: "darkorange",
    marginLeft: 100,
    marginTop: 10,
  },

  safeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aqua",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },

  textInput3: {
    width: "25%",
    height: 40,
    padding: 10,
    borderWidth: 5,
    borderColor: "#000",
    marginLeft: 35,
    backgroundColor: "#F9FBFC",
    marginTop: 5,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "left",
  },

  textInput4: {
    width: "25%",
    height: 40,
    padding: 10,
    borderWidth: 5,
    borderColor: "#000",
    marginLeft: 35,
    backgroundColor: "#F9FBFC",
    marginTop: 5,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "left",
  },

  textInput5: {
    width: "25%",
    height: 40,
    padding: 10,
    borderWidth: 5,
    borderColor: "#000",
    marginLeft: 35,
    backgroundColor: "#F9FBFC",
    marginTop: 5,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
});
