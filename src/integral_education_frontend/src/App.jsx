import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Score from './pages/Scores'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/'>
      <Route path='/' element={<Home/>} />
        <Route path='/index' element={<Index/>} />
        <Route path='/quiz' element={<Quiz/>} /> 
        <Route path='/scores' element={<Score/>} />
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