import './App.css';
import Main from '../Main/Main'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import Navigation from '../Navigation/Navigation';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../Profile/Profile';

function App() {
  return (
    <>
      <Navigation isOpen={false}/>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="movies" element={<MoviesCardList />}/>
        <Route path="saved-movies" element={<MoviesCardList />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="signin" element={<Login />}/>
        <Route path="signup" element={<Register />}/>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </>
  );
}

export default App;