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
import Playlist from './pages/private/Playlist/Playlist';
import SinglePlaylist from './pages/private/SinglePlaylist/SinglePlaylist';
import RequiresAuth from './components/RequiresAuth/RequiresAuth';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <ToastContainer
        theme="colored"
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<SingleVideo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <Like />
            </RequiresAuth>
          }
        />
        <Route
          path="/watch-later"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
        <Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
