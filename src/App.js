import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home from './Home';
import SingleMovie from './SingleMovie';
import {Error} from './Error';

function App() {
  return <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<SingleMovie/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
  
  </>
    

}

export default App;
