import React from 'react'
import { Routes , Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import NavBar from './components/NavBar'
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <div className='min-h-screen w-full bg-slate-950 text-white' >
      
      {/* <button className='bg-amber-400 rounded-full px-4 py-2 m-5'
        onClick={async ()=>{
          const data = await fetchPhotos('cat')
          console.log(data.results);
        }} >
        Get Photos
      </button>

      <button className='bg-amber-400 rounded-full px-4 py-2 m-5'
        onClick={async ()=>{
          const data = await fetchVideos('cat')
          console.log(data.videos);
        }} >
        Get Videos
      </button>

      <button className='bg-amber-400 rounded-full px-4 py-2 m-5'
        onClick={async ()=>{
          const data = await fetchGIF('dog')
          console.log(data);
        }} >
        Get GIF
      </button> */}
      
      <NavBar/>
      <Routes>
        <Route path='/'  element={<HomePage/>} />
        <Route path='/collection'  element={<CollectionPage/>}/>
      </Routes>

      <ToastContainer />

    </div>
  )
}

export default App