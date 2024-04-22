import React from 'react'
import {motion} from 'framer-motion'
import { Typography } from '@mui/material'

 const FramerMotion = ({move,children,duration}) => {



  return (
    <motion.div sx={{width:'67%'}}
    initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={duration}
        variants={move}>
    {children}
</motion.div>  )
}


export default FramerMotion;