import './App.css'
import { useState } from 'react'
import Flashcard from './components/Flashcard'

const App = () => {
  const cards = [
    { question: 'Hello', answer: 'হ্যালো / নমস্কার', category: 'Greeting' },
    { question: 'Thank you', answer: 'ধন্যবাদ', category: 'Polite Words' },
    { question: 'Water', answer: 'পানি', category: 'Everyday Words' },
    { question: 'Food', answer: 'খাবার', category: 'Everyday Words' },
    { question: 'Mother', answer: 'মা', category: 'Family' },
    { question: 'Father', answer: 'বাবা', category: 'Family' },
    { question: 'Yes', answer: 'হ্যাঁ', category: 'Basic Responses' },
    { question: 'No', answer: 'না', category: 'Basic Responses' },
    { question: 'How are you?', answer: 'তুমি কেমন আছ?', category: 'Phrases' },
    { question: 'Goodbye', answer: 'বিদায়', category: 'Greeting' }
  ]

  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState('')
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, '')
      .trim()
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleGuessChange = (event) => {
    setGuess(event.target.value)
  }

  const handleSubmitGuess = () => {
    const userGuess = normalizeText(guess)
    const correctAnswer = normalizeText(cards[currentCardIndex].answer)

    if (userGuess !== '' && correctAnswer.includes(userGuess)) {
      setFeedback('correct')
      const newStreak = currentStreak + 1
      setCurrentStreak(newStreak)

      if (newStreak > longestStreak) {
        setLongestStreak(newStreak)
      }
    } else {
      setFeedback('wrong')
      setCurrentStreak(0)
    }
  }

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
      setGuess('')
      setFeedback('')
    }
  }

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setIsFlipped(false)
      setGuess('')
      setFeedback('')
    }
  }

  return (
    <div className="App">
      <h1>Bangla Learning Flashcards</h1>
      <h2>Practice common Bangla words and phrases in a fun way.</h2>
      <p className="card-count">Total Cards: {cards.length}</p>

      <div className="streak-container">
        <p>Current Streak: {currentStreak}</p>
        <p>Longest Streak: {longestStreak}</p>
      </div>

      <Flashcard
        question={cards[currentCardIndex].question}
        answer={cards[currentCardIndex].answer}
        category={cards[currentCardIndex].category}
        isFlipped={isFlipped}
        onFlip={handleFlip}
        feedback={feedback}
      />

      <div className="guess-section">
        <label htmlFor="guess-input" className="guess-label">Your Guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={handleGuessChange}
          className="guess-input"
          placeholder="Type the Bangla answer..."
        />
        <button className="submit-btn" onClick={handleSubmitGuess}>
          Submit Guess
        </button>
      </div>

      <div className="nav-buttons">
        <button
          className="nav-btn"
          onClick={handlePrevCard}
          disabled={currentCardIndex === 0}
        >
          Back
        </button>

        <button
          className="nav-btn"
          onClick={handleNextCard}
          disabled={currentCardIndex === cards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App