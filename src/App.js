import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Everything from './pages/Everything';
import ProductPage from './pages/ProductPage';

function App() {
  return (
<div>
<BrowserRouter>
<Routes>
  <Route path='/' element={ <Home/>}/>
  <Route path='/about' element={ <About/>}/>
  <Route path='/contact' element= { <Contact/>} />
  <Route path='/everything' element={<Everything/>}/>
  <Route path='/product' element={<ProductPage/>}/>
</Routes>

</BrowserRouter>     

</div>
  );
}

export default App;
