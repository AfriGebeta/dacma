import React from 'react';
import './App.css';
import NavigationBar from './components/SideBar/NavigationBar';
import Dashboard from './pages/Dashboard';
import Sales from './pages/Sales';
import Places from './pages/Places';
import Mapview from './pages/Mapview';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'


function App() {
 

  return (
    <BrowserRouter>
      <div className='w-full flex'>
          {/* navigation bar */}
          <NavigationBar />
          {/* main compoent */}
          <main className=' grow'>
            <Routes>
              <Route index path="/" element={<Dashboard />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/places" element={<Places />} />
              <Route path="/mapview" element={<Mapview />} />
            </Routes>

          </main>
      </div>
    </BrowserRouter>
  )

}

export default App;
