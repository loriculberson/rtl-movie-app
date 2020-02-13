import React from 'react';

const MovieForm = () => {
  return (
    <div>
      <form onSubmit={() => console.log('clicked')} data-testid="movie-form">
        <input type='text'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default MovieForm;