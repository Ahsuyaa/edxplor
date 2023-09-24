"use client"
import React, { useState } from 'react';
import styles from './quiz.module.scss';
import Quiz from "../../../../components/quiz/Quiz"
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
    correctAnswerIndex: 1,
  },
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
    correctAnswerIndex: 1,
  },
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
    correctAnswerIndex: 1,
  },
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
    correctAnswerIndex: 1,
  },
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
    correctAnswerIndex: 1,
  },
  // Add more questions here...
];



const page = () => {
  return (
    <div className={styles.app}>
      <Quiz questions={questions} />
    </div>
  );
};

export default page;
