import { useState, useContext, useEffect } from "react";
import React from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ setRating }) => {
  // NOTE: We don't need local state here as it's a duplicate of parent state
  // also no real need for useEffect or context
  // useEffect(() => {
  //   select(feedbackEdit.item.rating)
  // }, [feedbackEdit])

  const [select, setSelect] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelect(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelect(+e.currentTarget.value);
    setRating(+e.currentTarget.value);
  };

  // NOTE: simplified with iteration
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={select === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
