import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import path from './utils/path';
import {Public, HomePage, Login, Signup, AllBooks, NewArrivals, FAQ, Contact, AboutUs, Decolonization, BookOnVn} from './pages';

function App() {
  return (
    <div className='max-w-screen'>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME_PAGE} element={<HomePage />}/>
            <Route path={path.LOGIN} element={<Login />}/>
            <Route path={path.SIGNUP} element={<Signup />}/>
            <Route path={path.ALL_BOOKS} element={<AllBooks />}/>
            <Route path={path.NEW_ARRIVALS} element={<NewArrivals />}/>
            <Route path={path.FAQ} element={<FAQ />}/>
            <Route path={path.CONTACT} element={<Contact />}/>
            <Route path={path.ABOUT_US} element={<AboutUs />}/>
            <Route path={path.DECOLONIZATION} element={<Decolonization />}/>
            <Route path={path.BOOKS_ON_VN} element={<BookOnVn />}/>

            
        </Route>
      </Routes>
    </div>
  );
}

export default App;
