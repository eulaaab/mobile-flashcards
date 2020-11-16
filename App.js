import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, } from 'redux';
import 'react-native-gesture-handler';

import { View, Platform, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'

import middleware from './middleware'
import reducer from "./reducers";

import DeckList from "./components/DeckList"
import DeckView from "./components/DeckView";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz"
import { setLocalNotification } from "./utils/helpers"
import { lightGray, white, orange, } from "./utils/colors"


function FlashcardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
const Stack = createStackNavigator();
const Tab = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialTopTabNavigator()
const StackNavigatorConfig = {
  headerMode: "screen"
}

//the tabs on screen
const RouteConfigs = {
  DeckList: {
    name: "Decks",
    component: DeckList,
    options: { tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} paddingBottom={50} />, title: 'Decks' }
  },
  AddDeck: {
    name: "Add Deck",
    component: AddDeck,
    options: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} paddingBottom={50} />, title: 'Add Deck',
    }
  }
}

//setup of the tabs e.g. styling
const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? orange : white,
    style: {
      paddingTop: 20,
      height: Platform.OS === "ios" ? 100 : 80,
      backgroundColor: Platform.OS === "ios" ? white : orange,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
}

//what's the tab
const TabNav = () => (
  <Tab.Navigator {...TabNavigatorConfig}>
    <Tab.Screen {...RouteConfigs["DeckList"]} />
    <Tab.Screen {...RouteConfigs["AddDeck"]} />
  </Tab.Navigator>
)


//the different views/components the app will go
const StackConfig = {
  TabNav: {
    name: "Home",
    component: TabNav,
    options: { headerShown: false }
  },
  DeckView: {
    name: "DeckView",
    component: DeckView,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange
      },
      title: "Deck View"
    }
  },
  AddCard: {
    name: "AddCard",
    component: AddCard,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange
      },
      title: "Add Card"
    }
  },
  Quiz: {
    name: "Quiz",
    component: Quiz,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange
      },
      title: "Quiz"
    }
  },
}

const MainNav = () => (
  <Stack.Navigator {...StackNavigatorConfig}>
    <Stack.Screen {...StackConfig["TabNav"]} />
    <Stack.Screen {...StackConfig["DeckView"]} />
    <Stack.Screen {...StackConfig["AddCard"]} />
    <Stack.Screen {...StackConfig["Quiz"]} />
  </Stack.Navigator>
)

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    const store = createStore(reducer, middleware);
    // const data = this.state;
    return (
      <Provider store={store}>
        < View style={{ flex: 1, backgroundColor: lightGray }}>
          <FlashcardStatusBar backgroundColor={orange} barStyle='light-content' />
          <NavigationContainer>
            <MainNav />
          </NavigationContainer>
        </View >
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  IOSIcon: {

  }
})