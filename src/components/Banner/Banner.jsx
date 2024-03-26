import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="rounded-xl bg-[#d8dfe280] pt-10 gap-40 text-center md:flex items-center justify-center">
        <div>
          <h2 className="text-6xl font-bold">
            Books to freshen <br />
            up your bookshelf
          </h2>
          <div className="pt-10">
            <Link to="/listedbooks">
              <button className="font-bold px-6 py-3 bg-[#23BE0A] text-white rounded-lg">
                View The List
              </button>
            </Link>
          </div>
        </div>
        <div className="pl-12 md:pb-14">
          <img src="/public/images/banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
