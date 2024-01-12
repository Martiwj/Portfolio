import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Homesite.js'
import About from './Pages/About/AboutMe.js'
import Projects from './Pages/Projects/MyProjects.js'

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/projects' element = {<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
