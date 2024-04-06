import React, { useState } from "react";

const DecimalAdd = () => {
  // Function to generate a random two plus two question
  function generateRandomDecimal() {
    const decimalPlaces = Math.random() < 0.5 ? 1 : 2;
    const lowerBound = decimalPlaces === 1 ? 10.0 : 10.0;
    const upperBound = decimalPlaces === 1 ? 99.9 : 99.99;
    return (Math.random() * (upperBound - lowerBound) + lowerBound).toFixed(
      decimalPlaces
    );
  }

  const [numOne, setNumOne] = useState(parseFloat(generateRandomDecimal()));
  const [numTwo, setNumTwo] = useState(parseFloat(generateRandomDecimal()));
  const [res, setRes] = useState((numOne + numTwo).toFixed(2));
  const [inputValue, setInputValue] = useState("");
  const [answerStatus, setAnswerStatus] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkAnswer = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (parseFloat(inputValue) === parseFloat(res)) {
      // Correct answer
      setAnswerStatus("Correct!");
      setInputValue("");
      const newNumOne = parseFloat(generateRandomDecimal());
      const newNumTwo = parseFloat(generateRandomDecimal());
      setNumOne(newNumOne);
      setNumTwo(newNumTwo);
      setRes((newNumOne + newNumTwo).toFixed(2));
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
          <p className="text-white font-lg">+</p>
          <p className="text-white font-lg">{numTwo}</p>
          <p className="text-white font-lg">=</p>
          <input
            type="number"
            step="any"
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

export default DecimalAdd;
