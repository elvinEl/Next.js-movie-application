import { notFound } from "next/navigation";
import React from "react";
import  MovieContainer  from "../../../../containers/movie";
import Movies from "../../../../mocks/movies.json";
function MoviePage({ params }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );
  if (!movieDetail) {
    notFound();
  }
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
