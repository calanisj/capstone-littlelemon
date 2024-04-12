import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Menu from './Components/Pages/Menu';
import BookingPage from './Components/Pages/BookingPage';
import OrderOnline from './Components/Pages/OrderOnline';
import Login from './Components/Pages/Login';
import Footer from './Components/Footer';
import {Routes,Route} from 'react-router-dom';
import ConfirmedBooking from './Components/Pages/Bookings/ConfirmedBooking';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/bookings" element={<BookingPage/>}/>
        <Route path="/orderonline" element={<OrderOnline/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/confirmed" element={<ConfirmedBooking/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
