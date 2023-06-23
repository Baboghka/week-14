import React, { useState } from 'react';

const Stars = () => {
  const [rating, setRating] = useState(0);
  const [reviewSaved, setReviewSaved] = useState(false);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const saveReview = () => {
    // Perform the necessary logic to save the review
    // For example, you can send an API request to your backend server
    // with the rating value or store it in local storage

    // Set reviewSaved to true to indicate that the review has been saved
    setReviewSaved(true);
  };

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          className={`star ${num <= rating ? 'selected' : ''}`}
          onClick={() => handleStarClick(num)}
          style={{
            fontSize: '24px',
            color: num <= rating ? '#f2b01e' : '#aaa',
            transition: 'color 0.3s',
            cursor: 'pointer',
          }}
        >
          &#9733;
        </span>
      ))}
      <button onClick={saveReview} disabled={reviewSaved}>
        {reviewSaved ? 'Review Saved' : 'Save Review'}
      </button>
    </div>
  );
};

export default Stars;



