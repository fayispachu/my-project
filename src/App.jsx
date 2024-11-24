import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BookList from "./component/BookList";

import Preview from "./component/Preview";
import Home from "./pages/Home";
import Header from "./component/Header";
import Favorites from "./pages/Favorites";

// import CardSkeleton from "./component/CardSkeleton";
// import BookList from "./component/BookList";
function App() {
  return (
    <>
      {/* <CardSkeleton>
        <BookList />
      </CardSkeleton> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/favorite" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
