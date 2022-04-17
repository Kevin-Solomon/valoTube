import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { VideoProvider } from './context/video/videoContext';
import { AuthProvider } from './context/auth/authContext';
import { HistoryProvider } from './context/history/historyContext';
import { LikeProvider } from './context/likes/likeContext';
import { WatchLaterProvider } from './context/watchLater/watchLaterContext';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <HistoryProvider>
          <LikeProvider>
            <WatchLaterProvider>
              <VideoProvider>
                <App />
              </VideoProvider>
            </WatchLaterProvider>
          </LikeProvider>
        </HistoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
