import React from 'react'
function MediaPageİtem({src,title,date,site}) {
  return (
    <div className=' w-full mb-3   p-3 border rounded-md glass media-page-item '>
        <img src={src} className='  object-cover media-page-img' />
        <div className='flex flex-col pl-2'> 
                <p className='italic'>{title}</p>
                
                <p>{date}</p>
                <p>{site}</p>

              
        </div>
    </div>
  )
}

export default MediaPageİtem