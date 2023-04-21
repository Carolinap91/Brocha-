import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'

// import ListarProductos from './components/listarUsuarios/ListarProductos';
// import ActualizarProducto from './components/actualizarProducto/ActualizarProducto';


import Home from './components/views/Home';
import CreateUser from './components/views/CreateUser'
import UsersView from './components/views/UsersView'

function App() {
  return (
    <div className='App'>
      <BrowserRouter> 
        <Routes >
              
                <Route path='/' element={<Home/>} />
                <Route path="/signup" element={<CreateUser/>} />
                <Route path="/users:id" element={<UsersView/>} />
                {/* <Route path="/login" element={<Login/>} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

