import { useEffect, useState } from "react";
import closeicon from "../assets/close.png";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((book) => book.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div id="favorites" className="p-3 text-center">
      <h2 className="font-bold text-2xl">Your Favorites</h2>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-20">
        {favorites.length === 0 ? (
          <p className="font-medium">No favorites added yet.</p>
        ) : (
          favorites.map((book) => (
            <div
              key={book.id}
              className="bg-[#e9edc9] shadow-lg rounded-lg md:py-5 py-5 transform hover:scale-105 transition-transform items-center flex flex-col cursor-pointer md:px-0 px-3"
            >
              <a
                className="pl-60 pb-2"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  removeFavorite(book.id);
                }}
              >
                <img
                  className="hover:bg-slate-300 w-6 h-6"
                  src={closeicon}
                  alt="Remove favorite"
                />
              </a>
              <img
                className="md:h-52 w-52 h-44"
                src={book.image_url}
                alt={book.title}
              />
              <h2 className="font-bold text-center">{book.title}</h2>
              <h3 className="text-gray-600">{book.authors}</h3>
              <p>Rating: {book.rating}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
