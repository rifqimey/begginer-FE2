import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/home';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import Profile from './pages/profile/Profile';
import Youcart from './pages/youcart';
import Forgot from './pages/forgot/forgot';
import Promotion from './pages/promotion';
import DetilProduct from './pages/detilProduct';
import History from './pages/history';







function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>  
      <Route path='/Promotion' element={<Promotion/>}/>
      <Route path='/yourcart' element={<Youcart/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      <Route path='/detilProduct' element={<DetilProduct/>}/>
      <Route path='/history' element={<History/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

