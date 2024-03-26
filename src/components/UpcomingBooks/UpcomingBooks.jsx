import { useEffect, useState } from "react";
import UpcomingBook from "../UpcomingBook/UpcomingBook";

const UpcomingBooks = () => {
  const [upcomingBooks, setUpcomingBooks] = useState([]);

  useEffect(() => {
    fetch("/upcoming.json")
      .then((res) => res.json())
      .then((data) => setUpcomingBooks(data));
  });
  return (
    <div>
      <div className="text-4xl font-bold text-center p-5">
        <h2>Books</h2>
      </div>
      <div className="pl-5 md:grid grid-cols-3 gap-6">
        {upcomingBooks.map((upcomingbook) => (
          <UpcomingBook
            key={upcomingbook.bookId}
            upcomingbook={upcomingbook}
          ></UpcomingBook>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBooks;
