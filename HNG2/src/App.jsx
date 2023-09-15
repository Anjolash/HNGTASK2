import { BrowserRouter as Router, matchPath, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { Link } from 'react-router-dom';


import './App.css'
import Home from './assets/pages/Home';
import MovieDetails from './assets/pages/MovieDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:id" exact element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
