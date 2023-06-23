import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [reviewText, setReviewText] = useState('');

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (reviewText.trim() === '') {
      return; // Don't add empty reviews
    }
    const newReview = { id: Date.now(), content: reviewText };
    addReview(newReview);
    setReviewText(''); // Clear the review text after adding the review
  };

  const handleClearReview = () => {
    setReviewText('');
  };

  return (
    <form className="review-form" onSubmit={handleReviewSubmit}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <textarea
          value={reviewText}
          onChange={(event) => setReviewText(event.target.value)}
          placeholder="Write a review..."
          rows={4}
        />
        <div>
          <button type="submit">
            Submit Review
          </button>
        </div>
        <div>
          <button type="button" onClick={handleClearReview}>
            Clear Review
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;

