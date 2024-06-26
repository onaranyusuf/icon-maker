import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideNav from './components/SideNav'
import IconController from './components/IconController'
import BgController from './components/BgController'
import IconPreview from './components/IconPreview'
import { UpdateStorageContext } from './context/UpdateStorageContext'
import BannerArea from './components/BannerArea'
import MobileError from './components/MobileError';

function App() {
  const [selectedIndex, setSelectedIndex]=useState(0);
  const [updateStorage, setUpdateStorage]=useState({});
  const [downloadIcon,setDownloadIcon]=useState();
  const isMobile = window.innerWidth <= 900;

  return (
    <UpdateStorageContext.Provider value={{updateStorage, setUpdateStorage}}>
    <>
      <Header DownloadIcon={setDownloadIcon} />
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
          <IconPreview downloadIcon={downloadIcon} />
        </div>
          
        <div className=''>
          <BannerArea/>
        </div>  
      </div>

    </>
    {isMobile && <MobileError />}
    <div className="name-footer text-black">
        <a href="https://github.com/onaranyusuf" target="_blank" rel="noopener noreferrer">Developed with ❤️ by YO</a>
      </div>
    </UpdateStorageContext.Provider>
  )
}

export default App
