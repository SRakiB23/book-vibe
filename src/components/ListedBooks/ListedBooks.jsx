import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadBook } from "../Utility/LocalStorage";
import ReadBookList from "../ReadBookList/ReadBookList";

const ListedBooks = () => {
  const books = useLoaderData();
  const [bookRead, setBookRead] = useState([]);
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
    }
  }, [books]);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center py-5 mb-8 bg-slate-100 rounded-xl">
        Books
      </h2>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            <div>
              {bookRead.map((readBook) => (
                <ReadBookList
                  key={readBook.bookId}
                  readBook={readBook}
                ></ReadBookList>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
