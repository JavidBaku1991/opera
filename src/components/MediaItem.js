import React from 'react'

function MediaItem({img, title,date,site}) {
  return (
    <div className=' mediaItem glass p-2'>
            <img src={img}  className='media-img flex justify-center align-middle '  />
            <div className='mb-2 p-2 '>
               <p className='media-title'>{title}</p>
            <p className='media-site'>{site}</p>
            <p className='media-date'>{date}</p>
            </div>
           
    </div>
  )
}

export default MediaItem