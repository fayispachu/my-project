import { useNavigate, useLocation } from "react-router-dom";
import arrow from "../assets/arrow.png";

function Preview() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const book = state?.book;

  if (!book) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex justify-center">
      <div className="bg-slate-300 pb-5 w-[90%] ">
        <div className="flex flex-row items-center gap-2 pl-3 pt-3">
          <img
            className="w-10 cursor-pointer"
            src={arrow}
            alt="Go back"
            onClick={() => navigate(-1)}
          />
          <label
            className="font-bold cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Go back
          </label>
        </div>
        <div className="flex md:flex-row  flex-col   ">
          <section className="flex flex-col md:pl-28 pl-32  md:w-[40%] text-center pt-10  ">
            <img className="h-52 w-52" src={book.image_url} alt={book.title} />
            <span className="w-[50%] pl-8 ">
              <h2 className="font-bold text-center ">{book.title}</h2>
              <h3 className="text-gray-600">{book.authors}</h3>
              <p>Rating: {book.rating}</p>
            </span>
          </section>
          <section className="md:pr-32 md:w-[60%]   md:flex md:items-center  pt-10 ">
            <p className="text-center">{book.description}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Preview;
