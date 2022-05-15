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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import MyHistory from './Pages/Dashboard/MyHistory';

function App() {
  return (
    <div className='max-w-7xl	mx-auto px-8 md:px-12'>

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
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyAppointment />} />
          <Route path='review' element={<MyReview />} />
          <Route path='history' element={<MyHistory />} />
          <Route path='users' element={<Users />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
      </Routes>

      {/* toaster to show toast  */}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
