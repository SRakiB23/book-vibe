import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { MdOutlineFindInPage } from "react-icons/md";

const WishListBook = ({ wishListBook }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    tags,
    rating,
    totalPages,
    yearOfPublishing,
    publisher,
  } = wishListBook;

  return (
    <div className="p-4">
      <div className="card md:card-side bg-base-100 shadow border-2">
        <figure>
          <img className="pl-4" src={image} alt="Books" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-semibold">{bookName}</h2>
          <p>
            <span>By: </span>
            {author}
          </p>
          <div>
            <div className="md:flex items-center gap-8 text-base py-2">
              <div className="flex items-center gap-4">
                <span className="font-bold">Tag</span>
                <ul className="flex gap-4 text-green-500">
                  {wishListBook.tags.map((tag, index) => (
                    <li className="bg-slate-100 p-1 rounded-lg" key={index}>
                      #{tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xl">
                  <CiLocationOn />
                </span>
                <p>Year of Publishing: {yearOfPublishing}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex gap-2 items-center">
              <span className="text-xl">
                <BsPeople />
              </span>
              <p>Publisher: {publisher}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">
                <MdOutlineFindInPage />
              </span>
              <p>Page {totalPages}</p>
            </div>
          </div>
          <hr />
          <div className=" md:flex text-center pt-3 gap-5">
            <div className="flex justify-center pb-4 gap-2 md:text-center">
              <button className="bg-blue-100 text-[#328EFF] py-2 px-2 rounded-2xl max-w-40">
                Catergory: {category}
              </button>
              <button className="bg-[#ecaa4780] text-orange-400 py-2 px-4 rounded-2xl max-w-32">
                Rating: {rating}
              </button>
            </div>
            <div>
              <Link to={`/book/${bookId}`}>
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-2xl">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListBook;
