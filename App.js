import './App.css';
import Home from './componants/home';
import About from './componants/about';
import Help from './componants/help';
import Nav from './componants/nav';
import Change from './componants/change';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/help'element={<Help/>}/>
        <Route path='/change'element={<Change/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
