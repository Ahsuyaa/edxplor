import React, { useState } from 'react';
import styles from './quiz.module.scss';

const Quiz = ({ questions }) => {
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedSelectedOptions = [...prevSelectedOptions];
      updatedSelectedOptions[questionIndex] = optionIndex;
      return updatedSelectedOptions;
    });
  };

  const handleQuizSubmit = () => {
    let totalScore = 0;
    questions.forEach((question, index) => {
      if (selectedOptions[index] !== null && question.correctAnswerIndex === selectedOptions[index]) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.quiz}>
      <h1 className={styles.heading}>Quiz</h1>
      {questions.map((question, questionIndex) => (
        <div className={styles.question} key={questionIndex}>
          <h2>{question.question}</h2>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className={styles.option}
                onClick={() => handleOptionSelect(questionIndex, optionIndex)}
              >
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  checked={selectedOptions[questionIndex] === optionIndex}
                  onChange={() => {}}
                />
                {option}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className={styles.submitButton} onClick={handleQuizSubmit}>
        Submit
      </button>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Quiz Complete!</h2>
            <p>Your score: {score} out of {questions.length}</p>
            <button className={styles.closeButton} onClick={handleModalClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
