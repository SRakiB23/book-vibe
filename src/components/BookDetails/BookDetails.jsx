import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);
  console.log(book);

  return (
    <div>
      <div className="pt-10 card lg:card-side bg-base-100 shadow h-96">
        <figure className="w-52">
          <img src={book.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <p>
            <span>By: </span>
            {book.author}
          </p>
          <hr />
          <p>{book.category}</p>
          <hr />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
