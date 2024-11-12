import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import bookmarkIcon from "../assets/bookmark.png";
import bookmarkNoIcon from "../assets/bookmarkno.png";

function MostRated({ books, favorites, toggleFavorite }) {
  const navigate = useNavigate();

  const mostRatedBooks = books
    .filter((book) => book.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating);

  const handleBookClick = (book) => {
    navigate("/preview", { state: { book } });
  };

  return (
    <div className="p-3">
      <div className="flex justify-center pt-10 font-serif font-extrabold text-2xl">
        <h1>Most Rated Books</h1>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-20">
        {mostRatedBooks.map((book) => (
          <div
            key={book.id}
            onClick={() => handleBookClick(book)}
            className="bg-[#e9edc9] shadow-lg rounded-lg transform hover:scale-105 transition-transform items-center flex flex-col cursor-pointer"
          >
            <span className="md:pl-60 pl-44 pt-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(book);
                }}
              >
                <img
                  src={
                    favorites.some((fav) => fav.id === book.id)
                      ? bookmarkIcon
                      : bookmarkNoIcon
                  }
                  alt="Favorite Icon"
                  className="h-5 w-6"
                />
              </button>
            </span>
            <img
              className="md:h-52 w-52 h-44"
              src={book.image_url}
              alt={book.title}
            />
            <h2 className="font-bold text-center px-1">{book.title}</h2>
            <h3 className="text-gray-600">{book.authors}</h3>
            <p>Rating: {book.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

MostRated.propTypes = {
  books: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default MostRated;
