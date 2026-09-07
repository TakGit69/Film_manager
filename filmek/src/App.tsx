import './App.css';
import {BrowserRouter, Route, Routes, NavLink} from "react-router";
import Home from '../components/Home';
import MovieList from '../components/MovieList';
import Favorites from '../components/Favorites';
import './index.css'


function App() {
  
  return (

    <BrowserRouter>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/movielist">Movie List</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
