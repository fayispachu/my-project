import PropTypes from "prop-types";

const CardSkeleton = ({ cards }) => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-20">
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <div
            className="bg-gray-300 animate-pulse shadow-lg rounded-lg items-center flex flex-col cursor-pointer py-3"
            key={i}
          >
            <div className="h-5 w-6 bg-gray-400 rounded mb-3 ml-56"></div>
            <div className="h-44 w-52 bg-gray-400 rounded-md"></div>
            <div className="h-6 w-3/4 bg-gray-400 rounded mt-4"></div>
            <div className="h-5 w-1/2 bg-gray-400 rounded mt-2"></div>
            <div className="h-4 w-1/4 bg-gray-400 rounded mt-2"></div>
          </div>
        ))}
    </div>
  );
};

CardSkeleton.prototype = {
  cards: PropTypes.number.isRequired,
};

export default CardSkeleton;
