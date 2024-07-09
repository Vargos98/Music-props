import React from 'react'

const Card = ({data, handleClick, index}) => {
  
  const {image,name,artist, added } = data;
  
  return (
      
      <div className='w-60  bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-20'>
          <div className='w-20 h-20 bg-orange-600 rounded-md  '>
            <img  className='w-full h-full object-cover overflow-hidden rounded-md' src={image} alt={image}></img>
          </div>
            <div className=' '>
              <h3 className='text-xl leading-none font-semibold'>{name}</h3>
              <h6 className='text-sm'>{artist}</h6>
            </div>  
            <button onClick={()=>handleClick(index)} className={`px-4 py-3 ${added=== false ? "bg-orange-600":"bg-teal-700"} absolute text-white text-sm rounded-full bottom-0 translate-y-[50%] left-1/2 whitespace-nowrap -translate-x-[50%]`}>{added=== false ? "Add to Favourites": "Added" }</button>  
        </div>
        
   
  )
}

export default Card