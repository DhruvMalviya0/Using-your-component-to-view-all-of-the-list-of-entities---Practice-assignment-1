import React from "react";

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white text-center">
      <img src={image} alt={name} className="w-full h-40 object-cover mb-3 rounded-md" />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">Genre: {genre}</p>
      <p className="text-gray-500">Author: {author}</p>
    </div>
  );
};

export default BookCard;
