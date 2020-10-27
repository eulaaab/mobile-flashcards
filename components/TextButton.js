import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { red } from '../utils/colors';

export default function TextButton({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.btnText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: "center",
    color: red,
  },
  btnText: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center"
  },
})