import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import MenuContainer from './Pages/MenuContainer'

import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/all" element={<MenuContainer />}/>
        <Route path="/categorias/:type" element={<MenuContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
