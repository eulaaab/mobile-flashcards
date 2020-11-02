import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Deck(props) {
  const { title, questions } = props;
  return (
    <View>
      <Text>DECK</Text>
      <Text>{title}</Text>

    </View>
  )
}
