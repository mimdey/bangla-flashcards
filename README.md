# Web Development Project 2 - *Bangla Learning Flashcards*

Submitted by: **Mim Dey**

This web app: **A flashcard web application designed to help users learn common Bangla words and phrases. Users can click a card to flip between the English word and the Bangla translation, and use a button to generate a random new flashcard.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)

- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time

- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front

- [x] **Clicking on the next button displays a random new card**

## Optional Features

The following **optional** features are implemented:

- [x] Cards have different visual styles such as color based on their category
  - Categories used:
    - Greetings
    - Family
    - Everyday Words
    - Basic Responses
    - Phrases

## Additional Features

The following **additional** features are implemented:

* [x] Pastel color theme for a friendly learning interface
* [x] Responsive layout for smaller screens
* [x] Category labels displayed on flashcards

## Video Walkthrough

Here's a walkthrough of implemented required features:

<!-- <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/e50b4cbd1b874ece86d8d2996137c280" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div> -->

GIF created with **Loom**

## Notes

One challenge encountered while building this project was managing the flashcard flip behavior while ensuring that only one side of the card was displayed at a time. Another challenge was generating a random new flashcard while resetting the card back to the front side. Using React's `useState()` hook helped manage both the card index and the flipped state efficiently.

## License

    Copyright 2026 Your Name

    Licensed under the Apache License, Version 2.0 (the "License");