import React from "react";
import MovieForm from "../movieForm/MovieForm";

const NewMovie = () => {
  return (
    <div>
      <h1 data-testid='page-title'>Add New Movie!</h1>
      <MovieForm />
    </div>
  );
};

export default NewMovie;
