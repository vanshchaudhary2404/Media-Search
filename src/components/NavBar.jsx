import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setQuery, setActiveTabs } from '../redux/features/searchSlice'

const NavBar = () => {
  const dispatch = useDispatch()

  const goToStartPage = () => {
    dispatch(setQuery(''))
    dispatch(setActiveTabs('photos'))
  }

  return (
    <header className='mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 shadow-[0_10px_30px_rgba(2,6,23,0.45)] backdrop-blur md:px-6'>
        <Link onClick={goToStartPage} to='/' className='text-xl font-bold tracking-tight text-white sm:text-2xl'>MediaSearch</Link>

        <div className='flex gap-4 items-center'>
          <Link onClick={goToStartPage} className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95 sm:px-5' to='/'>Search</Link>
          <Link className='rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 active:scale-95 sm:px-5' to='/collection'>Collections</Link>
        </div>
      </div>
    </header>
  )
}

export default NavBar