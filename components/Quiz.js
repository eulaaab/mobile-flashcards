import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, Animated, StyleSheet } from "react-native"
import TextButton from "./TextButton"
import { purple, lightGreen, lightOrange } from "../utils/colors"

class Quiz extends Component {
  state = {
    questionCount: 0,
    cardIndex: 0,
    correntAnswer: 0,
    flipSide: "Back",
    isLastCard: false,
    animatedValue: new Animated.Value(1)
  }
  UNSAFE_componentWillMount() {
    this.cardFlip = new Animated.Value(0);
    this.flipValue = 0;
    this.cardFlip.addListener(({ value }) => {
      this.flipValue = value;
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
    if (value >= 90 || front) {
      Animated.spring(this.cardFlip, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
      this.setState({
        flipSide: "Back"
      })
    } else {
      Animated.spring(this.cardFlip, {
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start();
      this.setState({
        flipSide: 'Front'
      })
    }
  }

  handleQuiz = () => {
    const { questions } = this.props.deck;
    const { cardIndex, } = this.state;
    const { correctAnswer } = questions[cardIndex];
    const { isCorrect } = selectedAnswer === correctAnswer;

    if (cardIndex + 1 === questions.length) {
      this.setState((currentState) => ({
        isLastCard: true,
        score: isCorrect ? recentScore.score + 1 : currentState.score
      }));
      Animated.sequence([
        Animated.timing(animatedValue, { duration: 200, toValue: 2.0 }),
        Animated.spring(animatedValue, { toValue: 1, friction: 4 })
      ]).start();
    }
    else {
      this.setState((currentState) => ({
        cardIndex: currentState.cardIndex + 1,
        flipSide: "Front",
        score: isCorrect ? currentState.score + 1 : currentState.score
      })
      )
      this.flipCard(true)
    }
  }


  render() {
    const { deck, navigation } = this.props;
    const { isLastCard, questionCount, cardIndex, flipSide, animatedValue } = this.state;
    const { questions } = deck;
    console.log('this is the deck questions', questions)
    console.log('questionCount', questionCount)
    console.log('question length', questions.length)
    return (
      <View style={{ paddingTop: 100, alignItems: "center" }}>
        {
          !isLastCard ? (
            <View>
              <View>
                <Text>{cardIndex + 1}/{questions.length}</Text>
              </View>
              {
                //TODO: Move to Header
              }
              <View>
                <Animated.View>
                  <Text>
                    {questions[cardIndex].question}
                  </Text>
                </Animated.View>
              </View>
              <View>
                <Animated.View>
                  <Text>
                    {questions[cardIndex].answer}
                  </Text>
                </Animated.View>
              </View>
              <View>
                {/* SHOWING ANSWER : FLIP CARD */}
                <TouchableOpacity>
                  <Text style={{ color: purple, fontSize: 20, marginBottom: 10 }}>Show {flipSide} Answer</Text>
                </TouchableOpacity>

                {/* FRONT SIDE OF THE QUIZ VIEW */}
                <Animated.View>
                  <Text style={{ color: purple, fontSize: 40, fontWeight: "700", marginBottom: 20 }}>question here</Text>
                </Animated.View>
                <Animated.View>
                  {/* BACK SIDE OF THE QUIZ VIEW */}
                  <TouchableOpacity >
                    <Text>question here</Text>
                  </TouchableOpacity>

                </Animated.View>
                <View>
                  <TextButton >
                    <TouchableOpacity onPress={() => this.handleSelectClick('true')}>
                      <Text style={{ color: lightGreen }}>Correct</Text>
                    </TouchableOpacity>
                  </TextButton >
                </View>
                <View >
                  <TextButton >
                    <TouchableOpacity onPress={() => this.handleSelectClick('false')}>
                      <Text style={{ color: lightOrange }}>Incorrect</Text>
                    </TouchableOpacity>
                  </TextButton>
                </View>
              </View>
            </View>
          ) : (
              <View >
                <Animated.Text >
                  {(correntAnswer / questions.length * 100).toFixed(0)} %
              </Animated.Text>
                <Text >Correct!</Text>
                <TouchableOpacity >
                  <Text >Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                  <Text>Back to Deck</Text>
                </TouchableOpacity>
              </View>
            )
        }
      </View>
    )
  }
}

function mapStateToProps({ decks }, { route }) {
  const { deckId } = route.params;
  return {
    deck: decks[deckId]
  };
};

export default connect(mapStateToProps)(Quiz);
