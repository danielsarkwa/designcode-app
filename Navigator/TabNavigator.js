import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SectionScreen from "../Screens/SectionScreen";
import CoursesScreen from "../Screens/CoursesScreen";
import ProjectsScreen from "../Screens/ProjectsScreen";
import { Ionicons } from "@expo/vector-icons";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen,
  },
  { mode: "modal" }
);

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;

  // detect the screen you are on
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  // determine whether to show or hide tabBar
  if (routeName == "Section") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    ),
  };
};

const CoursesStack = createStackNavigator({
  Courses: CoursesScreen,
});

CoursesStack.navigationOptions = {
  tabBarLabel: "Courses",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-albums"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const ProjectsStack = createStackNavigator({
  Projects: ProjectsScreen,
});

ProjectsStack.navigationOptions = {
  tabBarLabel: "Projects",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-folder"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

// tab view containing stacks of views
const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    CoursesStack,
    ProjectsStack,
  },
  {
    tabBarOptions: {
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
    },
  }
);

export default TabNavigator;
