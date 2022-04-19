import { Route, Routes } from 'react-router-dom';
import './App.css';
import History from './pages/private/History/History';
import Home from './pages/public/Home/Home';
import { Login } from './pages/public/Login/Login';
import { Signup } from './pages/public/Signup/Signup';
import SingleVideo from './pages/public/SingleVideo/SingleVideo';
import Mockman from 'mockman-js';
import Like from './pages/private/Like/Like';
import WatchLater from './pages/private/WatchLater/WatchLater';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos/:videoId" element={<SingleVideo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/history" element={<History />} />
      <Route path="/liked" element={<Like />} />
      <Route path="/watch-later" element={<WatchLater />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
}

export default App;
