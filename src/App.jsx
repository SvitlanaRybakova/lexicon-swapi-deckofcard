import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Swapi from './pages/Swapi';
import Deckofcards from './pages/Deckofcards';
import { routes } from './routes';

function App() {
  const swapiPath = routes[0].path;
  const deckocardsPath = routes[1].path;

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path={swapiPath} element={<Swapi />} />
        <Route exact path={deckocardsPath} element={<Deckofcards />} />
      </Routes>
    </>
  );
}

export default App;
