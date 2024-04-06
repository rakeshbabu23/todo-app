import React, { useState } from "react";

const ThreeMinusTwo = () => {
  // Function to generate a random three plus three question
  function generateRandomThreeDigitNumber() {
    return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  }
  function generateRandomTwoDigitNumber() {
    return Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  }

  const [numOne, setNumOne] = useState(generateRandomThreeDigitNumber());
  const [numTwo, setNumTwo] = useState(generateRandomTwoDigitNumber());
  const [res, setRes] = useState(numOne - numTwo);
  const [inputValue, setInputValue] = useState("");
  const [answerStatus, setAnswerStatus] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkAnswer = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (parseInt(inputValue) === res) {
      // Correct answer
      setAnswerStatus("Correct!");
      setInputValue("");
      const newNumOne = generateRandomThreeDigitNumber();
      const newNumTwo = generateRandomTwoDigitNumber();

      setNumOne(newNumOne);
      setNumTwo(newNumTwo);

      setRes(newNumOne - newNumTwo);
    } else {
      // Incorrect answer
      setAnswerStatus("Incorrect. Try again.");
    }
  };

  return (
    <div className="p-4 bg-black w-[100%] h-[90vh]">
      <form onSubmit={checkAnswer}>
        <div className="flex gap-4 justify-center items-center">
          <p className="text-white font-lg">{numOne}</p>
          <p className="text-white font-lg">-</p>
          <p className="text-white font-lg">{numTwo}</p>
          <p className="text-white font-lg">=</p>
          <input
            type="number"
            className="border border-gray-400 p-2"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Check
          </button>
        </div>
      </form>
      {answerStatus && (
        <p
          className={
            answerStatus === "Correct!" ? "text-green-500" : "text-red-500"
          }
        >
          {answerStatus}
        </p>
      )}
    </div>
  );
};

export default ThreeMinusTwo;
