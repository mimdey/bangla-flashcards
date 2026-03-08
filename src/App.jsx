import './App.css'
import { useState } from 'react'
import Flashcard from './components/Flashcard'

const App = () => {
  const cards = [
    { question: 'Hello', answer: 'নমস্কার', category: 'Greeting' },
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

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleNextCard = () => {
    let randomIndex = Math.floor(Math.random() * cards.length)

    while (randomIndex === currentCardIndex && cards.length > 1) {
      randomIndex = Math.floor(Math.random() * cards.length)
    }

    setCurrentCardIndex(randomIndex)
    setIsFlipped(false)
  }

  return (
    <div className="App">
      <h1>Bangla Learning Flashcards</h1>
      <h2>Practice common Bangla words and phrases in a fun way.</h2>
      <p className="card-count">Total Cards: {cards.length}</p>

      <Flashcard
        question={cards[currentCardIndex].question}
        answer={cards[currentCardIndex].answer}
        category={cards[currentCardIndex].category}
        isFlipped={isFlipped}
        onFlip={handleFlip}
      />

      <button className="next-btn" onClick={handleNextCard}>
        Next Card
      </button>
    </div>
  )
}

export default App