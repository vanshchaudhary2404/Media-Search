import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGIF } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {
  const dispatch = useDispatch() 
  const {query , activeTab , results , loading , error} = useSelector((store) => store.search)
   

    useEffect(function() {
      if(!query) return

      const getData = async ()=>{

        try{
          dispatch(setLoading())
          let data = []
          if( activeTab == 'photos'){
            let response = await fetchPhotos(query)
            data = response.results.map((item) =>({

              id: item.id,
              type: 'photo',
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html 

            }))
          }

          if( activeTab == 'videos'){
            let response = await fetchVideos(query)
            data = response.videos.map((item) =>({

              id:  item.id,
              type: 'video',
              title: item.user.name || 'video',
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url

            }))
          }

          /* 
            if( activeTab == 'gif'){
             let response = await fetchGIF(query)
             data = response.data.map((item) =>({

               id: item.id,
               type: 'gif',
               title: item.title || "GIF",
               thumbnail: item.media_formats.tinygif.url,
               src: item.media_formats.gif.url,
               url: item.url

             })) 
            */
          
          if( activeTab == 'gif'){
            let response = await fetchGIF(query)
            data = response.data.map((item) =>({

              id: item.id ,
              type: 'gif',
              title: item.title || 'GIF' ,
              thumbnail: item.images.fixed_height_small.url,
              src: item.images.original.url,
              url: item.url

            }))

          }
          console.log(data)
          dispatch(setResults(data))

        } catch(err){
          dispatch(setError(err.message))
        }
      }
      getData()
    },[query , activeTab , dispatch])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading...</h1>

 
  return (
    <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {results.map((item , idx)=>{
          return <ResultCard key={item.id || idx} item={item}/>
        })}
    </div>
  )
}

export default ResultGrid