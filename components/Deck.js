import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { red, white, black } from "../utils/colors"
import styled from "styled-components";

function Deck(props) {
  const { deck } = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 20 }]}>{deck.title}</Text>
      <Text style={[styles.text, { fontSize: 15 }]}>({deck.questions.length} Cards)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: red,
    borderRadius: 6,
    margin: 8,
    alignItems: "center",
  },
  text: {
    paddingTop: 5,
    paddingBottom: 5,
    color: white,
  }
})

export default Deck;