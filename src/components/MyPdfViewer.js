import React from 'react'

 const MyPdfViewer = ({pdf,title}) => {

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
    <div className='pdf-viewer'>
        <button onClick={()=>{downloadFile(pdf)}} className='note-button'>
            YÜKLƏ
        </button>
    </div>
  )
}


export default MyPdfViewer;