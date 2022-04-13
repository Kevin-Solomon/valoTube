import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/public/Home/Home';
import { Login } from './pages/public/Login/Login';
import { Signup } from './pages/public/Signup/Signup';
import SingleVideo from './pages/public/SingleVideo/SingleVideo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos/:videoId" element={<SingleVideo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
