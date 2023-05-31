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
import Gallery from './pages/Gallery';
import Chatroom from './components/ChatRoom/Chatroom';
import Chat from './components/Chat';
import Lesson from './components/Lesson';
import AshGallery from './pages/AshGallery';  
import AshleySidebar from './components/AshleySidebar';
import Rightbar from './components/Rightbar';
import Qrightbar from './components/Qrightbar';
import Ashfeed from './components/Ashfeed';
import Ashlesson from './components/AshLesson';
import AshProfile from './pages/AshProfile';
import Ashchat from './components/AshChat';







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
  {
    path: 'Gallery',
    element: <Gallery />
  },
  {
    path: 'ChatRoom',
    element: <Chatroom />
  },
  {
    path: 'Chat',
    element: <Chat />
  },
  {
    path: 'Lesson',
    element: <Lesson />
  },
  {
    path: 'AshGallery',
    element: <AshGallery />
  },
  {
    path: 'Rightbar',
    element: <Rightbar />
  },
  {
    path: 'Qrightbar',
    element: <Qrightbar />
  },
  {
    path: 'Ashfeed',
    element: <Ashfeed />
    
  },
  {
    path: 'AshLesson',
    element: <Ashlesson />
    
  },
   {
    path: 'Ashprofile',
    element: <AshProfile />
    
   },
   {
    path: 'Ashchat',
    element: <Ashchat />
    
   },
  {
    path: 'room',
    element: <RoomPage />,
    children: [
      {
        path: ':roomId',
        element: <RoomPage />
      }
    ]
    
  },
  // {
  //   path: 'AshleySidebar',
  //   element: <AshleySidebar />
  // },
 
]) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 
  <RouterProvider router={router}/>  
  
  
);



