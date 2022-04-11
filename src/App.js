import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import NoteState from './Context/notes/NoteState'; 
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
     <Navbar/>
     <Alert message="This is amazing React course" />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/about" element={<About />}>       
      </Route>
    </Routes>
  </BrowserRouter>
  </NoteState>

  </>
  );
}

export default App;
