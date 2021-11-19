import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Login from "./screens/login/login";
import SignUp from './screens/signup/signup'
import MyStack from './services/navigation-service/navigation-stack-service'
export default function App() {
  return (
      <MyStack></MyStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
});
