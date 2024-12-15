import React, { useEffect } from "react";

export default function Timer({ secondsRemaining, dispatch }) {
  useEffect(
    function () {
      //setting up the setInterval function
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id); // clearing the setInterval function
    },
    [dispatch]
  );

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && 0}
      {seconds}
    </div>
  );
}
