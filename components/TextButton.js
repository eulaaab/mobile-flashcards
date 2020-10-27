import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { red } from '../utils/colors';

export default function TextButton({ children }) {
  return (
    <TouchableOpacity>
      <Text>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyteSheet.create({
  reset: {
    textAlign: "center",
    color: red,
  }
})