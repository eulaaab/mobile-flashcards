import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { white, red, purple } from "../utils/colors";
import TextButton from "./TextButton";
import { removeDeck } from "../actions/index";
import { removeEntry } from "../utils/api"
import styled from "styled-components";

const ContainerView = styled.View`
padding-top: 30px;
align-items: center;
flex: 1
`
class DeckView extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.title !== undefined;
  }
  handleDelete = () => {
    console.log('title', this.props.title);
    const id = this.props.title
    this.props.dispatch(removeDeck(id));
    removeEntry(id);
    this.props.navigation.goBack();
  };
  render() {
    const { title, questions, navigation } = this.props;
    console.log("deck info", title)
    return (
      <ContainerView>
        <Text style={{ color: purple, fontSize: 45, fontWeight: "700", marginBottom: 20 }}>{title}</Text>
        <Text style={{ color: purple, fontSize: 25, marginBottom: 30 }}>{questions.length} Cards</Text>
        <View>
          <TextButton >
            <TouchableOpacity onPress={() => navigation.navigate(
              'AddCard',
              { title: title }
            )}>
              <Text style={{ color: white, fontSize: 20 }}>Add Card</Text>
            </TouchableOpacity>
          </TextButton>
        </View>
        <View >
          <TextButton disabled={questions.length === 0 ? true : false}  >
            <TouchableOpacity onPress={() => navigation.navigate('Quiz',
              { title: title }
            )}>
              <Text style={{ color: white, fontSize: 20 }}>Start Quiz</Text>
            </TouchableOpacity>
          </TextButton>
        </View>
        <View >
          <Text style={{ color: red, fontSize: 15, paddingBottom: 20 }} onPress={this.handleDelete}>Delete Deck</Text>
        </View>
        {
          questions.length === 0 ? (<View><Text style={{ color: red, fontSize: 15, fontWeight: "bold" }}>Please add a card before you can start the quiz!</Text></View>) : null
        }
      </ContainerView>
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