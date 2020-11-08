# Mobile Flashcards Project - Eula
This is a project for Udacity called Mobile Flashcards React Native course for the React Nanodegree Program. It is a mobile application that allows you to see a collection of flashcards. The application allows you to create flashcards called decks, add flashcard to those decks then take quizzes on them. Each card on the decks is a question you must answer whether it is Correct or Incorrect. At the front displays the question while the back displays the answer (flip the card). Users also receive a notification to remind themselves to study the decks if they haven't for the day.

Each deck has a TITLE and a QUESTIONS key.
TITLE - string
QUESTIONS - array of questions and answers for that deck. array of object questions. object has title and questions array. questions array is series of objects with question and answer.

VIEWS:
1. Deck List View (Default View)
- displays the title of each Deck
- displays the nubmer od cards in each deck.
2. Individual Deck View
- displays the title of the Deck
- displays the number of cards in the deck
- displays an option to start a quiz on this specific deck
- an option to add a new question to the deck
3. Quiz View
- display a card question
- an option to view the answer (flips the card)
- a "Correct" button
- an "Incorrect" button
- the number of cards left in the quiz
- Displays the percentage correct once the quiz is complete
4. New Deck View
- An option to enter in the title for the new deck
- An option to submit the new deck title
5. New Question View
- An option to enter in the question
- An option to enter in the answer
- An option to submit the new question

## Instructions to Install and Launch the Project

- install all project dependencies with `npm install`
- start the app with `npm start`

To run it locally:
1. install all project dependencies with npm install or expo install.
2. start the app with with expo start. It opens the browser and makes the bundle.
3. Select which OS to run the simulator (iOS or Android). You can also scan the QR code to view on mobile device as long as you installed the Expo app.