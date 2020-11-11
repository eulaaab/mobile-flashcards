import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import TextButton from "./TextButton"
import { white, purple } from "../utils/colors"
import { addCard } from "../actions/index"


export default class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  }

  handleQuestionInput = (question) => {
    this.setState({ question })
  }

  handleAnswerInput = (answer) => {
    this.setState({ answer })
  }
  handleSubmitCard = (card, title) => {
    const { addCard, title, navigation } = this.props;
    const card = {
      question: this.state.question,
      answer: this.state.answer
    };

    addCardToDeck(title, card);
    this.setState({ question: '', answer: '' });
    navigation.goBack();
  }
  render() {

    return (
      <View style={{ paddingTop: 300 }}>
        <Text style={{ color: purple, fontSize: 30, fontWeight: "700", marginBottom: 20, alignSelf: "center" }} >Add Card to Deck</Text>
        <TextInput style={{ fontSize: 20, borderWidth: 1, backgroundColor: white, borderRadius: 5, height: 40, padding: 20, margin: 20 }} onPress={this.handleQuestionInput} value={this.state.question}
          placeholder="Question" />
        <TextInput style={{ fontSize: 20, borderWidth: 1, backgroundColor: white, borderRadius: 5, height: 40, padding: 20, margin: 20 }} onPress={this.handleAnswerInput} value={this.state.answer}
          placeholder="Answer" />
        <TextButton>Create Card</TextButton>
      </View>
    )
  }
}
