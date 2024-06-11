import './App.css'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ReadingList from './pages/ReadingList';

function App() {
  return (
    <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/reading-list' element={<ReadingList />} />
    </Routes>
  )
}

export default App
