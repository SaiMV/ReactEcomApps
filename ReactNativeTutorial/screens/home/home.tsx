import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import loginStyle from "../../styles/login";
 import NavigationService from "../../services/navigation-service/navigation-service";
const Home: React.FC = () => {
  const getMoviesFromApi = () => {
    //return fetch('https://gorest.co.in/public-api/users') --working from https://gorest.co.in/
    // https://jsonplaceholder.typicode.com/photos 
    // https://jsonplaceholder.typicode.com/users
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {getMoviesFromApi()};
  const onSignup = () => {
    
    NavigationService.navigate("Signup");
  };
  return (
    <View style={loginStyle.container}>
      <LogoHolder></LogoHolder>
      <Text style={loginStyle.loginLabel}>Login</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="grey"
        style={[loginStyle.box]}
        onChangeText={(email) => setEmail(email)}
      ></TextInput>
      <TextInput
        placeholder="Passwrod"
        placeholderTextColor="grey"
        style={[loginStyle.box]}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      ></TextInput>
      <TouchableOpacity style={loginStyle.loginBtn} onPress={onLogin}>
        <Text style={loginStyle.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={loginStyle.inlineButtonContainer}>
        <TouchableOpacity style={[loginStyle.inlineButton,loginStyle.singupButton]} onPress={onSignup}>
          <Text style={loginStyle.inlineButtonText} >
            Signup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[loginStyle.inlineButton,,loginStyle.forgotButton]} onPress={onLogin}>
          <Text style={loginStyle.inlineButtonText} >
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const LogoHolder: React.FC = () => {
  return (
    <View style={loginStyle.logoContainer}>
      <Image source={require("../../assets/logo.png")} />
    </View>
  );
};
export default Home;
