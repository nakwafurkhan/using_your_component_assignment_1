// write the book component code here

import React from 'react';

function BookCard({ image, name, genre, author }) {
  return (
    <div
      className="book-card"
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        margin: '1rem',
        width: '220px',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: '200px', height: '300px', objectFit: 'cover' }}
      />
      <h2>{name}</h2>
      <p>
        <strong>Genre:</strong> {genre}
      </p>
      <p>
        <strong>Author:</strong> {author}
      </p>
    </div>
  );
}

export default BookCard;
