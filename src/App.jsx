import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Swiper from './pages/Swiper';
import Deckofcards from './pages/Deckofcards';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Swiper />} />
        <Route exact path="/deckocard" element={<Deckofcards />} />
      </Routes>
    </>
  );
}

export default App;
