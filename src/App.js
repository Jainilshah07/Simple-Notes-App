import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/about" element={<About />}>
      </Route>
    </Routes>
  </BrowserRouter>,
  </>
  );
}

export default App;
