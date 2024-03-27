import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStoredReadBook,
  saveReadBook,
  saveWishListBook,
} from "../Utility/LocalStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);

  const handleReadBook = () => {
    saveReadBook(idInt);
  };

  const handleWishListBook = () => {
    const isAlreadyInRead = getStoredReadBook().includes(idInt);

    if (isAlreadyInRead) {
      toast.error("Already In READING List");
    } else if (saveWishListBook(idInt)) {
      toast("Added to Wishlist");
    }
  };

  return (
    <div>
      <div className="md:pt-20 md:flex gap-8">
        <div className="bg-slate-50 p-20 rounded-xl">
          <img className="md:w-80 pt-20" src={book.image} alt="" />
        </div>
        <div className="p-2">
          <h2 className="text-4xl font-bold pb-2">{book.bookName}</h2>
          <p className="text-2xl pb-4">
            <span>By: </span>
            {book.author}
          </p>
          <hr />
          <p className="text-2xl font-medium py-2">{book.category}</p>
          <hr />
          <p className="text-lg py-4">{book.review}</p>
          <div>
            <div className="flex items-center gap-6 py-4">
              <span className="text-lg font-bold">Tag</span>
              <ul className="flex gap-5 font-semibold text-green-500 p-2">
                {book.tags.map((tag, index) => (
                  <li className="bg-slate-100 p-1 rounded-lg" key={index}>
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className="text-lg flex md:gap-20 pt-5">
            <div>
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating: </p>
            </div>
            <div>
              <p className="font-bold">{book.totalPages}</p>
              <p className="font-bold">{book.publisher}</p>
              <p className="font-bold">{book.yearOfPublishing}</p>
              <p className="font-bold">{book.rating}</p>
            </div>
          </div>
          <div className="flex gap-5 pt-10">
            <button
              onClick={handleReadBook}
              className="bg-slate-200 border-2 border-slate-300 hover:bg-green-500 px-6 py-2 rounded-lg"
            >
              Read
            </button>
            <ToastContainer />
            <button
              onClick={handleWishListBook}
              className="bg-[#50B1C9] hover:bg-blue-300 px-6 py-2 rounded-lg"
            >
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
