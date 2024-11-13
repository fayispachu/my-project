import { useState } from "react";
import libraryimg from "../assets/libraryimg.avif";
import BookList from "../component/BookList";

function BookHome() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="relative h-[90vh]  flex justify-center items-center">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={libraryimg}
          alt="Library"
        />
        <div className="relative z-10 flex flex-col items-center gap-5 bg-opacity-30 md:w-[50%] p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-extrabold font-serif text-gray-700">
            Let’s find your book
          </h1>
          <input
            type="text"
            placeholder="Search your book..."
            className="border bg-white  rounded-full p-2 w-[300px] text-center focus:outline-none focus:ring focus:border-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state
          />
        </div>
      </div>
      {/* Pass the searchTerm as a prop to BookList */}
      <BookList searchTerm={searchTerm} /> {/* Ensure you're passing it here */}
    </>
  );
}

export default BookHome;
