import CharactersList from './pages/CharactersList';
import './App.css';
import { Routes, Route } from 'react-router';
import Character from './pages/Character';
import Search from './pages/Search';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<CharactersList />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:id' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
