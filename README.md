# Web Development Project 3 - Bangla Learning Flashcards

Submitted by: **Mim Dey**

This web app: **A flashcard-based learning app that helps users practice common Bangla words and phrases. Users can type their guess for the Bangla translation before flipping the card to reveal the correct answer. The app provides visual feedback for correct and incorrect guesses and allows users to move forward and backward through the flashcard set.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  - Clicking on the submit button with a **correct** answer shows visual feedback that it is correct

- [x] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons have visual indication when the user is at the beginning or end of the list (disabled buttons), preventing wrap-around navigation

## Optional Features

The following **optional** features are implemented:

- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies and allowing partial answer matches

- [x] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 

- [ ] Users can use a shuffle button to randomize the order of the cards
- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards

## Additional Features

* [x] Flashcards include categories (Greeting, Family, Everyday Words, etc.) with different visual styles
* [x] Cards can be clicked to flip and reveal the answer
* [x] Clean responsive layout and styled flashcards

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='PUT_YOUR_GIF_LINK_HERE' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **Loom**

## Notes

One challenge encountered while building this project was implementing flexible answer checking while still keeping the validation accurate. To solve this, the app normalizes user input by ignoring punctuation and case differences, and partial matching is used so that close answers can still be considered correct. Managing multiple state variables for the flashcards, user guesses, and streak counters also required careful updates when navigating between cards.

## License

    Copyright 2026 Mim Dey

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.