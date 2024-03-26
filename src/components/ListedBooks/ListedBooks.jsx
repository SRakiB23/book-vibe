import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowDown } from "react-icons/io";
import {
  getStoredReadBook,
  getStoredWishListBook,
} from "../Utility/LocalStorage";
import ReadBookList from "../ReadBookList/ReadBookList";
import WishListBook from "../WishListBook/WishListBook";

const ListedBooks = () => {
  const books = useLoaderData();
  const [bookRead, setBookRead] = useState([]);
  const [bookWishList, setBookWishList] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);

  const handleBooksFilter = (filter) => {
    let sortedBooks;
    if (filter === "rating") {
      sortedBooks = [...bookRead].sort((a, b) => b.rating - a.rating);
    } else if (filter === "totalPages") {
      sortedBooks = [...bookRead].sort((a, b) => b.totalPages - a.totalPages);
    } else if (filter === "yearOfPublishing") {
      sortedBooks = [...bookRead].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    } else {
      sortedBooks = [...bookRead];
    }
    setDisplayBooks(sortedBooks);
  };

  useEffect(() => {
    const readBookIds = getStoredReadBook();
    if (books.length > 0) {
      const readBookList = [];
      for (const bookId of readBookIds) {
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          readBookList.push(book);
        }
      }
      setBookRead(readBookList);
      setDisplayBooks(readBookList);
    }
  }, [books]);
  useEffect(() => {
    const wishListBookIds = getStoredWishListBook();
    if (books.length > 0) {
      const wishListBookList = [];
      for (const bookId of wishListBookIds) {
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          wishListBookList.push(book);
        }
      }
      setBookWishList(wishListBookList);
    }
  }, [books]);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center py-5 mb-8 bg-slate-100 rounded-xl">
        Books
      </h2>

      <div className="text-center">
        <details className="dropdown ">
          <summary className="m-1 btn text-white bg-[#23BE0A] hover:bg-green-300 text-lg">
            Sort By{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleBooksFilter("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleBooksFilter("totalPages")}>
              <a>Number of Pages</a>
            </li>
            <li onClick={() => handleBooksFilter("yearOfPublishing")}>
              <a>Publishing Year</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            <div>
              {displayBooks.map((readBook) => (
                <ReadBookList
                  key={readBook.bookId}
                  readBook={readBook}
                ></ReadBookList>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {bookWishList.map((wishListBook) => (
              <WishListBook
                key={wishListBook.bookId}
                wishListBook={wishListBook}
              ></WishListBook>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
