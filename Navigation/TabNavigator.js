import React from "react";
import { StyleSheet } from "react-native";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Create Story") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color} />
          );
        },
      })}

     tabBarOptions={{
       activeTintColor : 'tomato',
       inactiveTintColor : 'gray',
     }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Create Story" component={CreatePost} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
 
});

export default BottomTabNavigator;