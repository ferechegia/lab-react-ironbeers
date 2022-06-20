import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import { Button } from '@mantine/core';


function App() {
  return (
    <div className="App">

    <Button>Settings</Button>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/beers' element={<Beers />}/>
        <Route path="/random-beer" element={<RandomBeer />}/>

      </Routes>
    </div>
  );
}

export default App;
