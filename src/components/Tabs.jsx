import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {

  const tabs = ['photos' , 'videos' , 'gif']
  
  const dispatch = useDispatch()

  const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='mx-auto mt-5 flex w-full max-w-4xl flex-wrap gap-3 px-4 sm:px-6 lg:px-8'>
      {tabs.map(function(elem ,idx){
        const isActive = activeTab === elem
        return (
          <button 
            key={idx}
            className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition active:scale-95 sm:text-base ${isActive ? 'bg-linear-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25' : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'}`}
            onClick={()=>{
              dispatch(setActiveTabs(elem))
            }}
          >
            {elem.toUpperCase()} 
          </button>
        )
      })}
    </div>
  )
}

export default Tabs