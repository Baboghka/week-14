import React from 'react';
import './styles.css';
import MovieList from './MovieList';
import movie1Image from './Assets/Images/movie1.jpg';
import movie2Image from './Assets/Images/movie2.jpg';
import movie3Image from './Assets/Images/movie3.jpg';

const App = () => {
  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      image: movie1Image,
      synopsis: 'This is a coming-of-age story of a young girl raised by the marshlands of the south in the 1950s. When the town hotshot is found dead…',
      rating: 4,
      reviews: [
        { id: 1, content: 'Great Movie!' },
        { id: 2, content: 'Highly recommended.' }
      ]
    },
    {
      id: 2,
      title: 'Movie 2',
      image: movie2Image,
      synopsis: 'The story involves the 227 days that its teenage hero spends drifting across the Pacific in a lifeboat with a Bengal tiger. They find themselves...',
      rating: 3,
      reviews: [
        { id: 3, content: 'Touching story' }
      ]
    },
    {
      id: 3,
      title: 'Movie 3',
      image: movie3Image,
      synopsis: 'The film tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her...',
      rating: 5,
      reviews: []
    }
  ];

  return (
    <div>
      <h1>Movie Voting and Review App</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;


