import "./App.css";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Review from "./screens/Reviews/Review";
import Submit from "./screens/Submit/Submit";
import Data from "./screens/Data/Data";
import NotFound from "./screens/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/course-review/*" element={<Review />} />
          <Route path="/professor-review/*" element={<Review />} />
          <Route path="/submit" element={<Submit setNewReview />} exact />
          <Route path="/full-data" element={<Data />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
