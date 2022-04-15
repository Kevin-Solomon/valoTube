import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { VideoProvider } from './context/video/videoContext';
import { AuthProvider } from './context/auth/authContext';
import { HistoryProvider } from './context/history/historyContext';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <HistoryProvider>
          <VideoProvider>
            <App />
          </VideoProvider>
        </HistoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
