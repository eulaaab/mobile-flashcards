import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { white, red, purple } from "../utils/colors";
import TextButton from "./TextButton";
import { removeDeck } from "../actions/index";

class DeckView extends Component {

  handleDelete = id => {
    this.props.dispatch(removeDeck(id));
    this.props.navigation.goBack();
  };
  render() {
    const { title, questions, navigation } = this.props;
    console.log("deck info", title)
    return (
      <View style={{ paddingTop: 300, alignItems: "center", flex: 1 }}>
        <Text style={{ color: purple, fontSize: 45, fontWeight: "700", marginBottom: 20 }}>{title}</Text>
        <Text style={{ color: purple, fontSize: 25, marginBottom: 30 }}>{questions.length} Cards</Text>
        <View>
          <TextButton >
            <TouchableOpacity onPress={() => navigation.navigate(
              'AddCard',
              { title: title }
            )}>
              <Text style={{ color: white }}>Add Card</Text>
            </TouchableOpacity>
          </TextButton>
        </View>
        <View >
          <TextButton disabled={questions.length === 0 ? true : false}  >
            <TouchableOpacity onPress={() => navigation.navigate('Quiz',
              { title: title }
            )}>
              <Text style={{ color: white }}>Start Quiz</Text>
            </TouchableOpacity>
          </TextButton>
        </View>
        <View >
          <Text style={{ color: red }} onPress={() => this.handleDelete(title)}>Delete Deck</Text>
        </View>
        {
          questions.length === 0 ? (<View><Text style={{ color: red }}>Please add a card before you can start the quiz!</Text></View>) : null
        }
      </View>
    )
  }
}

function mapStateToProps({ decks }, { route }) {
  const { title } = route.params;
  return {
    title,
    questions: decks[title].questions
  };
};

export default connect(mapStateToProps)(DeckView);