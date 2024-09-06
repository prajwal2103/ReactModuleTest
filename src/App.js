import React, { useEffect, useState } from 'react'
import ShowData from './Components/ShowData'

const App = () => {
  const[inputValue,setValue]=useState('')
  const [originalData,setOriginalData]=useState([])
  const[data,setData]=useState([])
  useEffect(()=>{
    const getData=async()=>{
      const response=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      const data=await response.json();
      console.log(data);
      setData(data);




      
      setOriginalData(data)
    }
    getData();

  },[])
  return (
    
<div className='w-screen h-screen bg-black '>

<div className='flex flex-col w-10/12 items-center  mx-auto text-white pt-5'>
 <div className='flex gap-2 mb-5'>
 <input placeholder='Search By Name or Symbol' className='p-2 bg-transparent w-[400px] border outline-none border-white' type='text'  value={inputValue} onChange={(event)=>{
    setValue(event.target.value)
}}   onInput={(event)=>{
    const name=event.target.value;
    if(name===''){
      setData(originalData)
    }
    else{
    const newArr=data.filter((item)=>{ 
      


      return item.name.includes(name) || item.symbol.includes(name)
    })
    setData(newArr)
    }
}} />
<button className='bg-transparent border border-white mx-2 py-2 px-4' onClick={()=>{
  let newData=[...data].sort((a,b)=>{
    return a.market_cap - b.market_cap
   })
   setData(newData);
 }}>Sort By Market_cap</button>
<button className='bg-transparent border border-white mx-2 py-2 px-4' onClick={()=>{
 let newData=[...data].sort((a,b)=>{
  return a.market_cap_change_percentage_24h - b.market_cap_change_percentage_24h
 })
 setData(newData);
}}>Sort By Percentage</button>

 </div>
 
<ShowData data={data}/>




</div>

</div>





  )
}

export default App