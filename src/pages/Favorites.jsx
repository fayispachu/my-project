import { useEffect, useState } from "react";
import closeicon from "../assets/close.png";
import arrow from "../assets/arrow.png";
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
    <div id="favorites" className="p-3  text-center bg-[#d8f3dc] h-auto">
      <h2 className="font-bold text-2xl">Your Favorites</h2>

      <div className="pl-5 absolute top-20 md:left-20 flex flex-row items-center gap-2  ">
        <a className="" href="/">
          <img className=" md:w-9 w-7" src={arrow} alt="" />{" "}
        </a>
        <p className="font-medium md:text-xl">Go back</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-20  pl-5">
        {favorites.length === 0 ? (
          <p className="font-medium">No favorites added yet.</p>
        ) : (
          favorites.map((book) => (
            <div
              key={book.id}
              className="bg-[#ffffff] shadow-lg rounded-lg    transform hover:scale-105 transition-transform items-center flex flex-col cursor-pointer md:px-1 px-3 w-56 "
            >
              <a
                className="pl-44 pt-3  pb-2"
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
