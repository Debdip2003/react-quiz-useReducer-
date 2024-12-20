import React from "react";

export default function Options({ questions, answer, dispatch }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {questions.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer " : ""}${
              hasAnswered
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={index}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
