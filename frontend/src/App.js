import './App.css'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
