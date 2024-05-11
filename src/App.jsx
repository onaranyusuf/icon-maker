import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideNav from './components/SideNav'
import IconController from './components/IconController'
import BgController from './components/BgController'
import IconPreview from './components/IconPreview'
import { UpdateStorageContext } from './context/UpdateStorageContext'

function App() {
  const [selectedIndex, setSelectedIndex]=useState(0);
  const [updateStorage, setUpdateStorage]=useState({});
  return (
    <UpdateStorageContext.Provider value={{updateStorage, setUpdateStorage}}>
    <>
      <Header/>
      <div className='w-64 fixed'>
        <SideNav selectedIndex={(value)=> setSelectedIndex(value)}/>
      </div>
      <div className='ml-64 grid grid-cols-1 md:grid-cols-6 fixed'>
        <div className='md:col-span-2 border h-screen shadow-sm p-5 overflow-auto'>
          {selectedIndex==0?
           <IconController/>:
           <BgController/>
        }
        </div>

        <div className='md:col-span-3'>
          <IconPreview/>
        </div>
          
        <div className='bg-green-50 w-screen'>
          Ad Banner
        </div>  
      </div>

    </>
    </UpdateStorageContext.Provider>
  )
}

export default App
