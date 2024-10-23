import React from 'react';
import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './Layout.css';

function Layout({ products, carts, role, setToken }) {
  return (<div className='layout-container'>
    <Header />
    <Navbar products={products} carts={carts} setToken={setToken} role={role} />
    <Outlet />
    <Footer />
  </div>);
}

export default Layout;