import React, { useState } from "react";

const OnePlusOne = () => {
  // Function to generate a random one plus one question
  function generateRandomOneDigitNumber() {
    return Math.floor(Math.random() * 10); // Generates a random number between 0 and 9
  }

  const [numOne, setNumOne] = useState(generateRandomOneDigitNumber());
  const [numTwo, setNumTwo] = useState(generateRandomOneDigitNumber());
  const [numThree, setNumThree] = useState(generateRandomOneDigitNumber());
  const [res, setRes] = useState(numOne + numTwo + numThree);
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
      const newNumOne = generateRandomOneDigitNumber();
      const newNumTwo = generateRandomOneDigitNumber();
      const newNumThree = generateRandomOneDigitNumber();
      setNumOne(newNumOne);
      setNumTwo(newNumTwo);
      setNumThree(newNumThree);
      setRes(newNumOne + newNumTwo + newNumThree);
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
          <p className="text-white font-lg">+</p>
          <p className="text-white font-lg">{numThree}</p>
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

export default OnePlusOne;
