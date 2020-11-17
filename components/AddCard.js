import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, Keyboard } from "react-native";
import TextButton from "./TextButton"
import { white, purple } from "../utils/colors"
import { addCardToDeck } from "../utils/api"
import { addCard } from "../actions/index"


class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  handleQuestionInput = (question) => {
    this.setState({
      question,
    })
  }

  handleAnswerInput = (answer) => {
    this.setState({
      answer,
    })
  }
  handleSubmitCard = () => {
    const { route, navigation, title } = this.props;
    const { deckId } = route.params;
    // const { question, answer, } = this.state;
    const card = {
      question: this.state.question,
      answer: this.state.answer,
    };
    //add card
    this.props.dispatch(addCard(card, title));

    //update db
    addCardToDeck(card, title)

    //navigate back to deckview
    navigation.navigate(
      "DeckView",
      { title: deckId }
    );
  }
  render() {
    const { question, answer } = this.state;
    return (
      <View style={{ paddingTop: 100 }}>
        <Text style={styles.TextStyle} >Add Card to Deck</Text>
        <KeyboardAvoidingView>
          <TextInput style={styles.TextInputStyle} onChangeText={this.handleQuestionInput} value={question} onSubmitEditing={Keyboard.dismiss}
            placeholder="Question" ref={ref => this.textInputRef = ref}
          />
        </KeyboardAvoidingView>
        <TextInput onSubmitEditing={Keyboard.dismiss} style={styles.TextInputStyle} onChangeText={this.handleAnswerInput} value={answer}
          placeholder="Answer" />
        <TextButton onPress={() => this.handleSubmitCard()} disabled={this.state.question === '' || this.state.answer === ''}>Create Card</TextButton>
      </View>
    )
  }
}
function mapStateToProps(state, { route }) {
  const { deckId } = route.params
  return {
    title: deckId
  }
}

export default connect(mapStateToProps)(AddCard);

const styles = StyleSheet.create({
  TextStyle: {
    color: purple,
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
    alignSelf: "center"
  },
  TextInputStyle: {
    fontSize: 20,
    borderWidth: 1,
    backgroundColor: white,
    borderRadius: 5,
    height: 60,
    padding: 20,
    margin: 20
  },
})