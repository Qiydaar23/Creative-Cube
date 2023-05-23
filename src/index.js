import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebaseContext from './context/firebase';
import { createBrowserRouter as Router, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Feed from './pages/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Timeline from './components/TimeLine/Timeline';
import RoomPage from './pages/RoomPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'Login',
    element: <Login />
  },
  {
    path: 'Profile',
    element: <Profile />
  },
  {
    path: 'Signup',
    element: <Signup />
  },
  {
    path: 'Feed',
    element: <Feed />
  },
  {
    path: 'Header',
    element: <Header />
  },
  {
    path: 'Sidebar',
    element: <Sidebar />
  },
  {
    path: 'Timeline',
    element: <Timeline />
  },
  {
    path: 'RoomPage',
    element: <RoomPage />
  },
]) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <firebaseContext.Provider value={{ firebase, FieldValue }}>\\
 
  <RouterProvider router={router}/>  
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

