import { useContext } from "react";
import React from "react";
import FeedbackContext from "../context/FeedbackContext";

function Feedbackstats() {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews </h4>
      <h4>Average Ratings: {average} </h4>
    </div>
  );
}

export default Feedbackstats;
