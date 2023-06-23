import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <ul className="review-list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
};

export default ReviewList;
