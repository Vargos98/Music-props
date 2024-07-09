import React from 'react'
import {useState} from 'react'
import Card from './Card'
import Navbar from './Navbar'

const App = () => {
  
  const data = [
    {image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", name: "Popstar", artist:"DJ Khaled", added:false },
    {image:"https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fHww", name: "Wolves", artist:"One Direction", added:false },
    {image:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljfGVufDB8fDB8fHww", name: "Leave ME alone", artist:"Justin Bieber", added:false },
    {image:"https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fHww", name: "Rap-god", artist:"Eminem", added:false },
    {image:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljfGVufDB8fDB8fHww", name: "Fireworks", artist:"Katy Perry", added:false },
    {image:"https://images.unsplash.com/photo-1458560871784-56d23406c091?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11c2ljfGVufDB8fDB8fHww", name: "Starlight", artist:"ED sheeran", added:false },
    {image:"https://plus.unsplash.com/premium_photo-1682294457124-ca66684678dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8fDA%3D", name: "Silence", artist:"NU", added:false },
    {image:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", name: "Bekhayali", artist:"Arijit Singh", added:false },
  ]
  
  
  
  
  
  const [songData, setSongData]=useState(data)
  const handleClick= (index)=>{

    setSongData((prev)=>{
      return prev.map((item, itemIndex)=>{
        if(itemIndex === index) return{...item, added: !item.added}
        
        return item;
      })
    })

  }
  
  
  return (
    <div className='w-full h-screen bg-zinc-300 '>
    
      <Navbar data={songData}/>
      <div className='px-20 flex gap-10 mt-10 flex-wrap'>
      {songData.map((obj,index)=>(
         <Card data ={obj} handleClick={handleClick} index={index} key={index}/>
      ))}
      </div>
     
    </div>
  )
}

export default App