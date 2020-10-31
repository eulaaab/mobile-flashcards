import React from "react"
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, View, } from 'react-native'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { white, red, orange, blue, pink, lightPurp } from "./colors";
import { Notifications } from expo;

const NOTIFICATION_KEY = "MobileFlashcards:notifications"