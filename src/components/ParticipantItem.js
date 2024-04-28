import React from 'react'
import { Link } from 'react-router-dom'
function ParticipantItem({name,src,title,about}) {
  return (
    <div className='w-6/7 mb-3 flex flex-col md:flex-row p-3 border rounded-md glass participant-item'>
        <img src={src} className='w-36 h-36 object-cover' />
        <div className='flex flex-col pl-2'> 
                <p className='font-bold'>{name}</p>
                <p className='italic'>{title}</p>
                <p className='	text-wrap: wrap;'>{about}  <Link to='/participants'>
                <span className='daha'> Daha etraflı...</span>
                </Link>
                </p>

              
        </div>
    </div>
  )
}

export default ParticipantItem