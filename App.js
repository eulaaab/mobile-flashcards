import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, } from 'redux';
import 'react-native-gesture-handler';

import { View, Platform, StatusBar, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import middleware from './middleware'
import reducer from "./reducers";

import DeckList from "./components/DeckList"
import DeckView from "./components/DeckView";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz"
import { lightGray, white, purple, } from "./utils/colors"


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
    options: { tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />, title: 'Decks' }
  },
  AddDeck: {
    name: "Add Deck",
    component: AddDeck,
    options: { tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />, title: 'Add Deck' }
  }
}

//setup of the tabs e.g. styling
const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 100,
      backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 6,
      shadowOpacity: 1
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
        backgroundColor: purple
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
        backgroundColor: purple
      }
    }
  },
  Quiz: {
    name: "Quiz",
    component: Quiz,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
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

  render() {
    const store = createStore(reducer, middleware);
    // const data = this.state;
    return (
      <Provider store={store}>
        < View style={{ flex: 1, paddingLeft: 10, paddingRight: 10, backgroundColor: lightGray }}>
          <NavigationContainer>
            <MainNav />
          </NavigationContainer>
        </View >
      </Provider>
    );
  }
}

