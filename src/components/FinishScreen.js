import React from "react";

export default function FinishScreen({
  points,
  maxPoints,
  dispatch,
  highScore,
}) {
  const pointPercentage = (points / maxPoints) * 100;

  let emoji;
  if (pointPercentage === 100) emoji = "🥇";
  if (pointPercentage >= 80 && pointPercentage < 100) emoji = "🥈";
  if (pointPercentage >= 50 && pointPercentage < 80) emoji = "🥉";
  if (pointPercentage >= 0 && pointPercentage < 50) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(pointPercentage)}%)
      </p>
      <p className="highscore">(Highscore : {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
