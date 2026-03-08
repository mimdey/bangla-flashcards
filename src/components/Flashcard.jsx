const Flashcard = ({ question, answer, category, isFlipped, onFlip }) => {
  return (
    <div className="flashcard-container" onClick={onFlip}>
      <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className={`flashcard flashcard-front ${category.toLowerCase().replace(/\s+/g, '-')}`}>
          <p className="category-label">{category}</p>
          <h3>{question}</h3>
          <p className="flip-text">Click card to flip</p>
        </div>

        <div className={`flashcard flashcard-back ${category.toLowerCase().replace(/\s+/g, '-')}`}>
          <p className="category-label">{category}</p>
          <h3>{answer}</h3>
          <p className="flip-text">Click card to flip back</p>
        </div>
      </div>
    </div>
  )
}

export default Flashcard