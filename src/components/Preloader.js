import React,{useEffect, useState} from 'react'
import logo from '../images/logo.png'
function Preloader() {


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // 3000 milliseconds = 3 seconds
  
      return () => clearTimeout(timer); // Clear the timer when the component unmounts
    }, []);


  return (
    <div   className={`preloader  ${isLoading ? 'show' : 'hide'}`}
    >
        <div>
            <img src={logo} className=' preloader-img scaling'/>
        
        </div>

    </div>
  )

}

export default Preloader