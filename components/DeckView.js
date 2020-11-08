import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { white, red, purple } from "../utils/colors";
import TextButton from "./TextButton";

class DeckView extends Component {

  render() {
    const { title, navigation } = this.props;
    console.log("deck info", title)
    return (
      <View style={{ paddingTop: 300, alignItems: "center" }}>
        <Text style={{ color: purple, fontSize: 45, fontWeight: "700", marginBottom: 20 }}>{title}</Text>
        <Text style={{ color: purple, fontSize: 25, marginBottom: 30 }}>length here</Text>
        <View>
          <TextButton>
            <Text style={{ color: white }}>Add Card</Text>
          </TextButton>
        </View>
        <View >
          <TextButton >
            <Text style={{ color: white }}>Start Quiz</Text>
          </TextButton>
        </View>
        <View >
          <Text style={{ color: red }}>Delete Deck</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, { route }) => {
  const title = route.params.title;
  const deck = state[title];
  return { deck };
};

export default connect(mapStateToProps)(DeckView);