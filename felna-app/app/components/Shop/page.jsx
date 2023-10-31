import React from 'react'
import Image from "next/image"
import Slider3 from './../../../images/product-6.jpg'
const Shop = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div className="flex flex-col w-full max-w-md">
      <h1 className="text-center text-3xl font-bold mb-10">
        Shoping Items
      </h1>

      <div className="flex gap-8 flex-row mb-10">
        <Image className="w-full h-auto"
          src = {Slider3} 
          width={0}
          height={0}
          sizes="100vw"
          
        />
        <div className="w-2/3">
          <h2 className="text-2xl font-bold">product name</h2>
          <p className="text-gray-500">product description</p>
          <p className='w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos, necessitatibus eaque obcaecati magnam explicabo dolores nemo totam quam? Earum ab consequuntur est expedita et reiciendis deserunt eveniet numquam quisquam.</p>
          <p className="text-gray-500 font-bold pt-5">Price: $56767</p>
        </div>
      </div>

      <form  className="flex flex-col w-full max-w-md">
        <input
          type="number"
          placeholder="Quantity"
          
          // onChange={(e) => setQuantity(e.target.value)}
          className="mb-5 border border-gray-300 p-2 rounded "
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28 h-10  m-auto"
        >
          Continue
        </button>
      </form>
    </div>
  </div>
  )
}

export default Shop