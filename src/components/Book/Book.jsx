import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <div>
      <div className="w-96">
        <Link to={`/book/${bookId}`}>
          <div className="card h-2/4 bg-base-100 border">
            <figure>
              <img src={image} alt="books" />
            </figure>
            <div className="card-body w-full flex-1">
              <div className="card-actions gap-4">
                <div className="text-base text-green-500">
                  <ul className="flex gap-5">
                    {book.tags.map((tag, index) => (
                      <li className="bg-slate-100 p-1 rounded-lg" key={index}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <h2 className="card-title py-3">{bookName}</h2>
              <p className="pb-2">
                <span className="font-bold">By: </span>
                {author}
              </p>
              <hr />
              <div className="flex flex-1 justify-between pt-2 font-semibold">
                <p>{category}</p>

                <p className="flex gap-2 pl-40">
                  {rating}
                  <span className="text-xl items-center">
                    <FaRegStar />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Book;
