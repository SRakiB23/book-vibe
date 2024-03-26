import { useEffect, useState } from "react";
import Book from "../Book/Book";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/bookData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  });
  return (
    <div>
      <div className="text-4xl font-bold text-center p-5">
        <h2>Books</h2>
      </div>
      <div className="pl-5 md:grid grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
