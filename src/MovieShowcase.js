import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js';

export default class MovieShowcase extends Component {
	generateMovieCards = (movieData) => {
		return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
	};

	render() {
		return <div id="movie-showcase">{this.generateMovieCards()}</div>;
	}
}
// {
//   h3 title: 'Choux and Maru go to Istanbul',
//   span IMDBRating: 3,
//   h5 genres: ['cats', 'adventure', 'romance'],
//   img poster: 'choux-maru-istanbul'
// },
