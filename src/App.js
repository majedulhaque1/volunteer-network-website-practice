import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Header/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Resister from './Pages/Login/Resister/Resister';
import Login from './Pages/Login/Login/Login';
import Main from './Pages/Main/Main';
import AddEvents from './Pages/AddEvents/AddEvents';
import Events from './Pages/Events/Events';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/resister' element={<Resister></Resister>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/addevents' element={<AddEvents></AddEvents>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
      </Routes>
    </div>
  );
}

export default App;
