import React from 'react'
import Card from './cards/page'

const page = () => {
  return (
   <>
   <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[13px] place-items-center'>
   <Card 
   name='Qaimudin Khuwaja'
   desc='I am Qaimudin Khuwaja student of GIAIC. This is our home work of class SUNDAY 2 TO 5 pm.Sir Ali Jawad give us this home work.'
   button='My Details...'
   color='bg-purple-300'
   btnbg='bg-black'
   
   />



<Card 
   name='Mubashir Ali'
   desc='I am Mubashir Ali student of GIAIC. This is our home work of class SUNDAY 2 TO 5 pm.Sir Ali Jawad give us this home work.'
   button='View More...'
   color='bg-white'
   btnbg='bg-orange-500'
   
   />




<Card 
   name='Faraz Ahmed'
   desc='I am Faraz Ahmed student of GIAIC. This is our home work of class SUNDAY 2 TO 5 pm.Sir Ali Jawad give us this home work.'
   button='Click to view...'
   color='bg-blue-400'
   btnbg='bg-yellow-500'
   
   />
   </div>
   </>
  )
}

export default page