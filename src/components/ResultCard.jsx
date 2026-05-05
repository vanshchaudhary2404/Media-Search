import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection , addedToast} from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {

  const dispatch = useDispatch()

  const addToCollection = (item)=>{
    // console.log(item)

    // const oldData = JSON.parse(localStorage.getItem('collection')) || []
    // const newData = [...oldData , item]
    // localStorage.setItem('collection' , JSON.stringify(newData))


    dispatch(addCollection(item))
    dispatch(addedToast())
  }


  return (
    <div className='group relative overflow-hidden rounded-2xl bg-slate-900 shadow-[0_14px_40px_rgba(2,6,23,0.35)] ring-1 ring-white/10 transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(2,6,23,0.55)]'>
      <a target='_blank' className='block aspect-4/5 w-full' href={item.url} rel="noreferrer">
          {item.type == 'photo' ? <img className='h-full w-full object-cover transition duration-300 group-hover:scale-105' src={item.src} alt="" /> : ''}
          {item.type == 'video' ? <video className='h-full w-full object-cover transition duration-300 group-hover:scale-105' autoPlay loop muted src={item.src}></video> : ''}
          {item.type == 'gif' ? <img className='h-full w-full object-cover transition duration-300 group-hover:scale-105' src={item.src} alt="" /> : ''}
      </a>

      <div className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-linear-to-t from-slate-950/95 via-slate-950/70 to-transparent p-4 text-white'>
        <h2 className='max-h-14 overflow-hidden text-sm font-semibold capitalize leading-5 sm:text-base'>
          {item.title}
        </h2>
        <button
          onClick={()=>{
            addToCollection(item)
          }} 
          className='shrink-0 rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition active:scale-95 hover:bg-indigo-400'
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default ResultCard