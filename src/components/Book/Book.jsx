const Book = ({ book }) => {
  const { bookName, author, image, rating, category, tags } = book;

  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body w-full">
            <div className="card-actions gap-4">
              <div className="badge text-base text-green-500">{tags}</div>
              <div className="badge text-base text-green-500">{}</div>
            </div>
            <h2 className="card-title py-3">The Catcher in the Rye</h2>
            <p className="pb-2">
              By: <span>Awlad Hossain</span>
            </p>
            <hr />
            <div className="flex justify-between pt-2">
              <p>Fiction</p>

              <p>5.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
