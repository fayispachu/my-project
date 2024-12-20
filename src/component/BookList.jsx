import { useEffect, useState, useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// Active favorite icon
import bookmarkIcon from "../assets/bookmark.png";
import bookmarkNoIcon from "../assets/bookmarkno.png";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import CardSkeleton from "./CardSkeleton";

function BookList({ searchTerm }) {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);
  const cardSectionRef = useRef(null);
  const navigate = useNavigate();
  const delay = (ms) => new Promise((reslove) => setTimeout(reslove, ms));
  const [visibleCount, setVisivleCount] = useState(8);

  const loadMore = () => {
    setVisivleCount((prevCount) => prevCount + 8);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError("");

      try {
        await delay(2000); // Add a 2-second delay
        const response = await axios.get(
          "https://example-data.draftbit.com/books"
        );
        const fetchedBooks = response.data;
        console.log(fetchedBooks);
        setBooks(fetchedBooks);
        setFilteredBooks(fetchedBooks);
      } catch (err) {
        setError("Failed to fetch books. ", err, error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);

      // Scroll to  search results section
      cardSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setFilteredBooks(books);
    }
  }, [searchTerm, books]);

  const toggleFavorite = (book) => {
    if (favorites.some((fav) => fav.id === book.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== book.id));
    } else {
      setFavorites([...favorites, book]);
    }
  };
  // for scroll to top
  const handleBookClick = (book) => {
    console.log("Book clicked:", book);
    window.scrollTo(0, 0);
    navigate("/preview", { state: { book } });
  };

  const mostRatedBooks = books
    .filter((book) => book.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-[#fdf5e6]">
      {/* Conditionally render Most Rated section only if there is no search term */}
      {!searchTerm && (
        <div className="p-3 ">
          <div className="flex justify-center pt-10 font-serif font-extrabold text-2xl">
            <h1 className="text-[#441616]" id="rated">
              Most Rated Books
            </h1>
          </div>
          {loading && <CardSkeleton cards={8} />}

          <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-20 pl-4">
            {mostRatedBooks.map((book) => (
              <div
                key={book.id}
                onClick={() => handleBookClick(book)}
                className="bg-[#fce6c5] shadow-lg rounded-lg transform hover:scale-105 transition-transform items-center flex flex-col cursor-pointer pt-3 w-72"
              >
                <span className="md:pl-60 pl-44   ">
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
                  className="md:h-52 w-52 h-44 "
                  src={book.image_url}
                  alt={book.title || <Skeleton />}
                />
                <h2 className="font-bold text-center px-1">{book.title}</h2>
                <h3 className="text-gray-600">{book.authors}</h3>
                <p>Rating: {book.rating}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search Results all Books Section */}
      <div className="bg-[#c2bcb1] ">
        <div className="flex justify-center pt-10 font-serif font-extrabold text-2xl  ">
          <h1 className="text-[#441616]">
            {searchTerm ? `Search Results for "${searchTerm}"` : "All Books"}
          </h1>
        </div>

        <div className="p-3" ref={cardSectionRef}>
          {loading && <CardSkeleton cards={8} />}
          <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-20 pl-4">
            {filteredBooks.slice(0, visibleCount).map((book) => (
              <div
                key={book.id}
                onClick={() => handleBookClick(book)}
                className="bg-[#fce6c5] shadow-lg rounded-lg md:py-2 transform hover:scale-105 transition-transform items-center flex flex-col cursor-pointer md:px-0 px-3 w-72"
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
          {visibleCount < filteredBooks.length && (
            <div className="flex justify-center items-center">
              {" "}
              <button
                onClick={loadMore}
                className="mt-6 px-6 py-2 bg-[#fce6c5] text-blue-700 font-bold rounded shadow hover:bg-blue-600"
              >
                More Books
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

BookList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default BookList;
