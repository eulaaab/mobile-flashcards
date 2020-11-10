import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Platform, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, } from "react-native";
import TextButton from "./TextButton";
import { white, purple, lightGray } from "../utils/colors";
import { addDeck } from '../actions/index';

class AddDeck extends Component {
  state = {
    input: ""
  }

  handleInput = (input) => {
    this.setState({
      input,
    })
  }

  handleSubmit = () => {
    const { addDeck, navigation } = this.props;
    const { input } = this.state;
    const deck = {
      title: input,
      questions: []
    }
    addDeck(deck);
    this.setState(() => ({ input: '' }));
    navigation.goBack()
  }
  render() {
    const { input } = this.state;
    return (
      <View style={{ paddingTop: 300, alignItems: "center" }}>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> */}
        <KeyboardAvoidingView>
          <Text style={{ color: purple, fontSize: 30, fontWeight: "700", marginBottom: 20, alignSelf: "center" }}>What is the Title of your deck?</Text>
          <View>
            <TextInput style={{ fontSize: 20, borderWidth: 1, backgroundColor: lightGray, borderRadius: 5, height: 60, padding: 20, }}
              placeholder="Input Deck Title"
              value={input}
              onChangeText={this.handleInput}
            />
          </View>
          <View>
            <TextButton>
              <Text style={{ color: white, fontSize: 20 }} onPress={this.handleSubmit}>
                Create Deck
          </Text>
            </TextButton>

          </View>
        </KeyboardAvoidingView>
        {/* </TouchableWithoutFeedback> */}
      </View>
    )
  }
}

export default connect(null,
  { addDeck })(AddDeck)