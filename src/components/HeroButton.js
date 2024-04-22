import React from 'react'
import { Link } from 'react-router-dom'

import programme from '../pdf/programme.pdf'


function HeroButton() {

  const downloadFile=(url)=>{
    fetch(url).then(response=>response.blob()).then(blob=>{
      const blobURL =window.URL.createObjectURL(new Blob([blob]))
      
      const fileName=url;
      const aTag =document.createElement('a')
      aTag.href=blobURL;
      aTag.setAttribute('download',fileName)
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    })
    
    }

  
  return (
    <>
      <a href='https://iticket.az/events/i-international-opera-festival-of-fidan-hajiyeva'>
       <button  className="button-13" 
       >
    <span className="text">BIlet Al</span>
    <span className="button-13-background"></span>
    <span className="button-13-border"></span>
  
    <svg style={{ position: "absolute" }} width="0" height="0">
      <filter id="remove-black-button-13" colorInterpolationFilters="sRGB">
        <feColorMatrix type="matrix" values="1 0 0 0 0
                                              0 1 0 0 0
                                              0 0 1 0 0
                                              -1 -1 -1 0 1" result="black-pixels" />
        <feComposite in="SourceGraphic" in2="black-pixels" operator="out" />
      </filter>
    </svg>
      </button>
    </a>
       <button  className="button-14"  onClick={()=>{downloadFile(programme)}}>
    <span className="text">Proqram</span>
    <span className="button-14-background"></span>
    <span className="button-14-border"></span>
  
    <svg style={{ position: "absolute" }} width="0" height="0">
      <filter id="remove-black-button-14" colorInterpolationFilters="sRGB">
        <feColorMatrix type="matrix" values="1 0 0 0 0
                                              0 1 0 0 0
                                              0 0 1 0 0
                                              -1 -1 -1 0 1" result="black-pixels" />
        <feComposite in="SourceGraphic" in2="black-pixels" operator="out" />
      </filter>
    </svg>
      </button>

    
    </>
  
 
    )
}

export default HeroButton