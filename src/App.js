import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import TopRated from './Components/TopRated';
import UpcomingMovies from './Components/UpcomingMovies';
import SingleMovie from  './Components/SingleMovie';
import Search from './Components/Search';




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/upcoming" element={<UpcomingMovies />} />
          <Route path="/onemovie/:id" element={<SingleMovie />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
