import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../../screens/signup/signup";
import Login from "../../screens/login/login";
import { navigationRef } from "../navigation-service/navigation-service";
import { StatusBar } from "react-native";
import Galary from '../../screens/common-components/galary/galary'
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={"dark-content"} />
      <Stack.Navigator initialRouteName="Galary">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Galary" component={Galary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
