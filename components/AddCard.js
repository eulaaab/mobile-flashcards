import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import TextButton from "./TextButton"
import { white, purple } from "../utils/colors"
import { addCard } from "../actions/index"
import { addCardToDeck } from "../utils/api"


class AddCard extends Component {
  state = {
    question: "",
    answer: ""
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
  handleSubmitCard = (card, title) => {
    const { addCard, route, navigation } = this.props;
    const { question, answer } = this.state;

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
      <View style={{ paddingTop: 200 }}>
        <Text style={{ color: purple, fontSize: 30, fontWeight: "700", marginBottom: 20, alignSelf: "center" }} >Add Card to Deck</Text>
        <KeyboardAvoidingView>
          <TextInput style={{ fontSize: 20, borderWidth: 1, backgroundColor: white, borderRadius: 5, height: 60, padding: 20, margin: 20 }} onChangeText={this.handleQuestionInput} value={question}
            placeholder="Question" ref={ref => this.textInputRef = ref}
          />
        </KeyboardAvoidingView>
        <TextInput style={{ fontSize: 20, borderWidth: 1, backgroundColor: white, borderRadius: 5, height: 60, padding: 20, margin: 20 }} onChangeText={this.handleAnswerInput} value={answer}
          placeholder="Answer" />
        <TextButton onPress={() => this.handleSubmitCard()}>Create Card</TextButton>
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
