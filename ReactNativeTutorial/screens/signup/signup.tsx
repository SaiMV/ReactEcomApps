import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import loginStyle from "../../styles/login";
import NavigationService from "../../services/navigation-service/navigation-service";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const onSignup = () => {};
  const onCancel = () => {
    NavigationService.goBack();
  };
  return (
    <View style={loginStyle.container}>
      <LogoHolder></LogoHolder>
      <Text style={loginStyle.loginLabel}>Singup</Text>
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
      <TextInput
        placeholder="Re enter password"
        placeholderTextColor="grey"
        style={[loginStyle.box]}
        secureTextEntry={true}
        onChangeText={(password) => setReEnterPassword(password)}
      ></TextInput>
      <View style={loginStyle.inlineButtonContainer}>
        <TouchableOpacity
          style={[loginStyle.inlineButton, loginStyle.singupButton]}
        >
          <Text style={loginStyle.inlineButtonText} onPress={onSignup}>
            Signup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[loginStyle.inlineButton, , loginStyle.forgotButton]}
        >
          <Text style={loginStyle.inlineButtonText} onPress={onCancel}>
            Cancel
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
export default SignUp;
