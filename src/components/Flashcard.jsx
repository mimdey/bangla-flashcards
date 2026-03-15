const Flashcard = ({ question, answer, category, isFlipped, onFlip, feedback }) => {
  return (
    <div
      className={`flashcard ${category.toLowerCase().replace(/\s+/g, '-')} ${feedback}`}
      onClick={onFlip}
    >
      <p className="category-label">{category}</p>
      <h3>{isFlipped ? answer : question}</h3>
      <p className="flip-text">
        {isFlipped ? 'Click card to flip back' : 'Click card to flip'}
      </p>
    </div>
  )
}

export default Flashcard
