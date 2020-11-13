import React from "react"
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, View, } from 'react-native'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { white, red, orange, blue, pink, lightPurp } from "./colors";
import { Notifications,} from "expo";

const NOTIFICATION_KEY = "MobileFlashcards:notifications"

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
          if (data === null) {
              Permissions.askAsync(Permissions.NOTIFICATIONS)
                  .then(({ status }) => {
                      if (status === 'granted') {
                          Notifications.cancelAllScheduledNotificationsAsync();
                          let tomorrow = new Date();
                          tomorrow.setDate(tomorrow.getDate() + 1);
                          tomorrow.setHours(20);
                          tomorrow.setMinutes(0);
          
                          Notifications.scheduleLocalNotificationAsync(
                          createNotification(),
                          {
                              time: tomorrow,
                              repeat: 'day',
                          }
                          )          
                          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                      }
              })
      }
  })
}