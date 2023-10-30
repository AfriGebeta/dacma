import React from 'react';
import './App.css';
import NavigationBar from './components/SideBar/NavigationBar';
import Dashboard from './pages/Dashboard';
import Sales from './pages/Sales';
function App() {
 

  return (
      <div className='w-full flex'>
          {/* navigation bar */}
          <NavigationBar />
          {/* main compoent */}
          <main className=' grow'>
            {/* <Dashboard/> */}
            <Sales />
          </main>
      </div>
  )

}

export default App;
