import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NavBarMenu, Footer} from './Components'
import {Home, CreateUser, UsersView, Login} from './Views'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className='app'>
      <BrowserRouter> 
      <NavBarMenu/>
      <div className='body container'>
      <Routes >
          <Route path='/' element={<Home/>} />
          <Route path="/signup" element={<CreateUser/>} />
          <Route path="/users/:id" element={<UsersView/>} />
          <Route path="/login" element={<Login/>} /> 
        </Routes>
      </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

