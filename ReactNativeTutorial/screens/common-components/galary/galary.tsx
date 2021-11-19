import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Image,
  TextInput,
} from "react-native";
import NavigationService from "../../../services/navigation-service/navigation-service";
interface Props {
    name: string;
}
const GalaryItem: React.FC <{imageUrl: string}>= (imageUrl) => {
  return (
    <Image
      style={{ width: "100%", height: 200, resizeMode: "stretch" }}
      source={{
        uri:
          "https://4.bp.blogspot.com/-krdeTqQLML8/Wyf2oV7eedI/AAAAAAAABpI/OZ759swV7L8wWtt2pwBXIgp6aPz33r01gCLcBGAs/s400/fist%2Bapp.jpg",
      }}
    />
  );
};

const Galary: React.FC = () => {
   
     
    const attr = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          return json.movies
        })
        .catch((error) => {
          console.error(error);
        })
        return Array;
       } 
      
  return (
    // https://jsonplaceholder.typicode.com/photos
    // https://jsonplaceholder.typicode.com/users
     //attr.forEach(() => {
        <Image
          style={{ width: "100%", height: 200, resizeMode: "stretch" }}
          source={{
            uri:
              "https://4.bp.blogspot.com/-krdeTqQLML8/Wyf2oV7eedI/AAAAAAAABpI/OZ759swV7L8wWtt2pwBXIgp6aPz33r01gCLcBGAs/s400/fist%2Bapp.jpg",
          }}
        />
      //});
  )
};

export default Galary;
