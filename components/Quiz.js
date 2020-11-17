import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, Animated, StyleSheet } from "react-native"
import TextButton from "./TextButton"
import { purple, lightGreen, lightOrange, seaGreen, blue, orange } from "../utils/colors"

class Quiz extends Component {
  state = {
    cardIndex: 0,
    score: 0,
    flipSide: "Back",
    isLastCard: false,
    animatedValue: new Animated.Value(1),
    correctAnswer: "true",
    incorrectAnswer: "false"
  }
  UNSAFE_componentWillMount() {
    this.cardFlip = new Animated.Value(0);
    this.flipValue = 0;
    this.cardFlip.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.cardFlip.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"],
    })

    this.backInterpolate = this.cardFlip.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    })

    this.frontOpacity = this.cardFlip.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })

    this.backOpacity = this.cardFlip.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })
  }

  flipCard = (front = false) => {
    if (this.value >= 90 || front) {
      Animated.spring(this.cardFlip, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true
      }).start();
      this.setState({
        flipSide: "Back"
      })
    } else {
      Animated.spring(this.cardFlip, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true
      }).start();
      this.setState({
        flipSide: 'Front'
      })
    }
  }

  handleQuiz = (selected) => {
    const { questions } = this.props.deck;
    const { cardIndex, animatedValue } = this.state;
    // const { correctAnswer } = this.state;
    let isCorrect = selected;

    if (cardIndex + 1 === questions.length) {
      this.setState((currentState) => ({
        isLastCard: true,
        score: isCorrect === "true" ? currentState.score + 1 : currentState.score
      }));
      Animated.sequence([
        Animated.timing(animatedValue, { duration: 200, toValue: 2, useNativeDriver: true }),
        Animated.spring(animatedValue, { toValue: 1, friction: 4, useNativeDriver: true })
      ]).start();
    }
    else {
      this.setState((currentState) => ({
        cardIndex: currentState.cardIndex + 1,
        flipSide: "Front",
        score: isCorrect === "true" ? currentState.score + 1 : currentState.score
      })
      )
      console.log('schore', this.state.score)
      this.flipCard(true)
    }
  }

  handleRestart = () => {
    this.setState({
      cardIndex: 0,
      score: 0,
      flipSide: "Back",
      isLastCard: false,
    })
  }

  render() {
    const { deck, navigation } = this.props;
    const { isLastCard, cardIndex, animatedValue, score } = this.state;
    const { questions } = deck;
    // console.log('this is the deck questions', questions)
    // console.log('questionCount', questionCount)
    // console.log('question length', questions.length)

    const frontStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    }
    const backStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }
    return (
      <View style={{ paddingTop: 100, alignItems: "center" }}>
        {
          !isLastCard ? (
            <View>
              <View>
                <Text>Card {cardIndex + 1}/{questions.length}</Text>
              </View>
              {
                //TODO: Move to Header
              }
              <View>
                {
                  //question
                }
                <Animated.View style={[frontStyle, styles.flipStyle,]}>
                  <Text style={styles.QuestionStyle}>{questions[cardIndex].question}</Text>
                </Animated.View>
                {
                  //answer
                }
                <Animated.View style={[backStyle, styles.flipStyle,]}>
                  <TouchableOpacity >
                    <Text style={styles.AnswerStyle}>{questions[cardIndex].answer}</Text>
                  </TouchableOpacity>
                </Animated.View>
                {/* SHOWING ANSWER : FLIP CARD */}
                <TouchableOpacity onPress={() => this.flipCard()}>
                  <Text style={styles.answer}>Show Answer!</Text>
                </TouchableOpacity>
                <View>
                  <TextButton >
                    <TouchableOpacity onPress={() => this.handleQuiz('true')}>
                      <Text style={{ color: lightGreen, fontSize: 20, }}>Correct</Text>
                    </TouchableOpacity>
                  </TextButton >
                </View>
                <View >
                  <TextButton >
                    <TouchableOpacity onPress={() => this.handleQuiz('false')}>
                      <Text style={{ color: lightOrange, fontSize: 20, }}>Incorrect</Text>
                    </TouchableOpacity>
                  </TextButton>
                </View>
              </View>
            </View>
          ) : (
              <View >
                <Animated.Text style={[styles.score, { transform: [{ scale: animatedValue }] }]}>
                  {((score / questions.length) * 100).toFixed(0)} %
              </Animated.Text>
                <TouchableOpacity>
                  <Text style={styles.CorrectStyle}>Correct Answers!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleRestart}>
                  <Text style={styles.RestartStyle}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("DeckView")}>
                  <Text style={styles.BackToDeckStyle}>Back to Deck</Text>
                </TouchableOpacity>
              </View>
            )
        }
      </View>
    )
  }
}

function mapStateToProps({ decks }, { route }) {
  const deckId = route.params.title;
  return {
    deck: decks[deckId]
  };
};

export default connect(mapStateToProps)(Quiz);

const styles = StyleSheet.create({
  score: {
    marginTop: 60,
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 30,
    color: purple
  },
  answer: {
    color: purple,
    fontSize: 20,
    marginBottom: 10
  },
  flipStyle: {
    width: 300,
    height: 50,
    marginTop: 1,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  QuestionStyle: {
    paddingTop: 20,
    fontSize: 20,
  },
  AnswerStyle: {
    fontSize: 15,
    color: seaGreen,
  },
  CorrectStyle: {
    color: seaGreen,
    paddingTop: 20,
    fontSize: 20,
  },
  RestartStyle: {
    color: blue,
    paddingTop: 20,
    fontSize: 20,
  },
  BackToDeckStyle: {
    color: orange,
    paddingTop: 20,
    fontSize: 20,
  }
})