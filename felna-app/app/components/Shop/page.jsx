'use client'
import React,{useState,useEffect} from 'react'
import Image from "next/image"
import Slider3 from './../../../images/product-6.jpg'
import Header from '../Header/page'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/page'
const Shop = () => {
  const[item,setItem] = useState(0);
  useEffect(()=>{
    const handleClick=()=>{
    
      setItem(item + 1)
      
    }
  },[item])

  // const handleClick1=()=>{
    
  //   setItem(item - 1)
    
  // }
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="flex container mx-auto py-28">
      <div className="flex flex-col w-full max-w-md">
        <h1 className="text-center text-3xl font-bold pb-10">
          Shoping Items..
        </h1>
        <div className="flex gap-12 flex-row mb-10">
          <Image className="w-full h-auto"
            src = {Slider3} 
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="w-2/3">
            <h2 className="text-2xl font-bold pb-3">Product name:Axesories</h2>
            <p className="text-gray-500">Product description:</p>
            <p className='w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos, necessitatibus eaque obcaecati magnam explicabo dolores nemo totam quam? Earum ab consequuntur est expedita et reiciendis deserunt eveniet numquam quisquam.</p>
            <p className="text-gray-500 font-bold pt-5">Price: $56767</p>
            <div className='flex gap-3 pt-5'>
              
            <button  className='text-2xl px-2 bg-slate-400 text-white' >+</button>
            <input type="text" className='w-12 outline-none text-center'  onChange={(e)=>setItem(e.target.value)} value={item} />
            <button className='text-2xl px-3 bg-slate-400 text-white' >-</button>
          </div>
          </div>
          
        </div>

        <form  className="flex flex-col w-full max-w-md">
          
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-md m-auto"
          >
            Add To Card
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Shop