import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BookList from "./component/BookList";

import Preview from "./component/Preview";
import Home from "./pages/Home";
import Header from "./component/Header";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
