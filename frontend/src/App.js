import './App.css'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Review from './screens/Reviews/Review'
import Submit from './screens/Submit/Submit'
import Data from './screens/Data/Data'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/course-review/:id' element={<Review />} exact />
        <Route path='/professor-review/:id' element={<Review />} exact />
        <Route path='/submit' element={<Submit />} exact />
        <Route path='/full-data' element={<Data />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
