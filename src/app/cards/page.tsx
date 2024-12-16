import React from 'react'


const Card = (props:any ) => {
    const {name, desc, button, color, btnbg} = props;

  return (
   <>
   <div className={`${color} text-center shadow-xl shadow-black py-[14px] h-[300px] w-[300px] rounded-lg border-4 border-yellow-500`}>
     <h1 className='text-[28px] hover:shadow-black hover:shadow-xl text-orange-500'>{name}</h1>
     <p className='text-[18px] mt-[12px]'> {desc}</p>
    <div className={`${btnbg} mt-[20px] py-[10px] px-[10px] rounded-xl text-white`}>{button}</div>

   </div>
   
   
   </>
  )
}

export default Card;