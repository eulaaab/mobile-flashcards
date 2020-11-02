import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { red ,lightPurple} from '../utils/colors';

export default function TextButton({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.btnText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 60,
    padding: 10,
    borderRadius: 6,
    borderWidth:2,
    borderColor: lightPurple,
    margin: 8,
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
    backgroundColor: lightPurple
  },
  btnText: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
})