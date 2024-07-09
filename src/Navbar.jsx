import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className="w-full px-20 py-3 flex justify-between items-center">
      <h3>Orange</h3>
      <div className='flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3'>
        <h3>Favourites</h3>
        <h2>{data.filter(item=> item.added).length}</h2>
      </div>
    </div>
  )
}

export default Navbar