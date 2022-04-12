import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/public/Home/Home';
import SingleVideo from './pages/public/SingleVideo/SingleVideo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos/:videoId" element={<SingleVideo />} />
    </Routes>
  );
}

export default App;
