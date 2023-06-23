import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const deleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <div className="movie">
      <img className="movie__image" src={movie.image} alt={movie.title} />
      <div className="movie__details">
        <h2 className="movie__title">{movie.title}</h2>
        <p className="movie__description">{movie.synopsis}</p>
        <Stars />
        <ReviewForm addReview={addReview} />
        <ReviewList reviews={reviews} deleteReview={deleteReview} />
      </div>
    </div>
  );
};

export default Movie;


