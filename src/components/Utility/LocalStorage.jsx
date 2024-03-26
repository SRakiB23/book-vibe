import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getStoredReadBook = () => {
  const storedReadBook = localStorage.getItem("read-book");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  } else {
    return [];
  }
};
export { getStoredReadBook };

const saveReadBook = (id) => {
  const storedReadBook = getStoredReadBook();
  const exists = storedReadBook.find((bookId) => bookId === id);
  if (!exists) {
    storedReadBook.push(id);
    localStorage.setItem("read-book", JSON.stringify(storedReadBook));
    return toast("Book Added to Read List");
  }
  <ToastContainer />;
  return toast.error("Already Existed!!!");
};
export { saveReadBook };

const getStoredWishListBook = () => {
  const storedWishListBook = localStorage.getItem("wishlist-book");
  if (storedWishListBook) {
    return JSON.parse(storedWishListBook);
  } else {
    return [];
  }
};
export { getStoredWishListBook };

const saveWishListBook = (id) => {
  const storedWishListBook = getStoredWishListBook();
  const exists = storedWishListBook.find((bookId) => bookId === id);

  if (!exists) {
    storedWishListBook.push(id);
    localStorage.setItem("wishlist-book", JSON.stringify(storedWishListBook));
    return toast("Book Added to WishList");
  }
  <ToastContainer />;
  return toast.error("Already Existed in WishList");
};
export { saveWishListBook };
