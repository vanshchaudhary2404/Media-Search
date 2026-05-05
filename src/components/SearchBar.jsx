import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {setQuery} from '../redux/features/searchSlice'

const SearchBar = () => {
 

  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const submitHandler =(e)=>{
    e.preventDefault()
    if(text.trim()) {
      dispatch(setQuery(text))
    }
    setText('')
  }
 
  return (

    <div className='mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_12px_40px_rgba(2,6,23,0.35)] backdrop-blur sm:flex-row sm:items-center sm:p-5'>

        <input 

          value={text}
          onChange={(e)=>{
            setText(e.target.value)
          }}
          type="text"
          required
          className='w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 sm:text-lg' 
          placeholder='Search Anything......' 
        
        />
        
        <button  className='cursor-pointer rounded-2xl bg-indigo-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-400 active:scale-95 sm:text-lg' > Search </button>
      
      </form>
    </div>
  )
}

export default SearchBar