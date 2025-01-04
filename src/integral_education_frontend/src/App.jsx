import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Leaderboard from './pages/Leaderboard'
import Article from './pages/Article'
import Chat from './pages/Chat'
import NotFound from './pages/NotFound'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
		AOS.init({
			duration: 1000, // Global animation duration
			once: true, // Only once animation
		});
	}, []);
  return (
    <Routes>
      <Route path='/'>
      <Route path='/' element={<Home/>} />
        <Route path='/index' element={<Index/>} />
        <Route path='/article' element={<Article/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/quiz' element={<Quiz/>} /> 
        <Route path='/leaderboard' element={<Leaderboard/>} />
        <Route path='*' element={<NotFound/>} />
      </Route> 
    </Routes>
  );
}

export default App;

// ctr c
// dfx stop


// dfx start
// dfx deploy