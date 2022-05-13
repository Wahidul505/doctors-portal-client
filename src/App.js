import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import NavBar from './Pages/Shared/NavBar';
import Signup from './Pages/Auth/Signup';
import RequireAuth from './Pages/Auth/RequireAuth';
import { Toaster } from 'react-hot-toast';
import ResetPassword from './Pages/Auth/ResetPassword';

function App() {
  return (
    <div className='max-w-7xl	mx-auto px-8 md:px-12'>

      {/* toaster to show toast  */}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      {/* main components  */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
