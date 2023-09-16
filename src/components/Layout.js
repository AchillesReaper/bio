import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet /> {/* This will render the content of the clicked links */}

      </div>
    </div>
  );
}


