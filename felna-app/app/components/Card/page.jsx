
import Image from "next/image"
import Link from 'next/link'
import Slider2 from './../../../Images/slide-2.jpg'
import banner from './../../../images/banner.jpg';
const Card = () => {
  return (
    <>
    <div className="my-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mx-auto 2xl:mx-auto 2xl:container 2xl:grid-cols-5 ">
       <div className="w-80 border-4 rounded-md mx-auto p-3">
            <div className="card-image">
                <Image className="mx-auto pb-2"
                    src = {banner} 
                    height={20}
                    width={200}      
                />
            </div>
            <div className="card-body ">
                <div className="content text-center ">
                    <h1>Product Title:</h1>
                    <p>Description: officia nesciunt, ipsa vitae quam dignissimos fuga, debitis unde t odit!</p>
                    <Link href="/components/Shop"> <button className="px-5 py-2 bg-red-400 border-none text-white rounded-sm mt-2">Shop Now</button></Link>
                </div>
            </div>
       </div>
       <div className="w-80 border-2 rounded-md mx-auto p-3">
            <div className="card-image">
                <Image className="mx-auto pb-2"
                    src = {banner} 
                    height={20}
                    width={200}      
                />
            </div>
            <div className="card-body ">
                <div className="content text-center ">
                    <h1>Product Title:</h1>
                    <p>Description: officia nesciunt, ipsa vitae quam dignissimos fuga, debitis unde t odit!</p>
                    <Link href="/components/Shop"> <button className="px-5 py-2 bg-red-400 border-none text-white rounded-sm mt-2">Shop Now</button></Link>
                </div>
            </div>
       </div>
       <div className="w-80 border-2 rounded-md mx-auto p-3">
            <div className="card-image">
                <Image className="mx-auto pb-2"
                    src = {banner} 
                    height={20}
                    width={200}      
                />
            </div>
            <div className="card-body ">
                <div className="content text-center ">
                    <h1>Product Title:</h1>
                    <p>Description: officia nesciunt, ipsa vitae quam dignissimos fuga, debitis unde t odit!</p>
                    <Link href="/components/Shop"> <button className="px-5 py-2 bg-red-400 border-none text-white rounded-sm mt-2">Shop Now</button></Link>
                </div>
            </div>
       </div>
       <div className="w-80 border-2 rounded-md mx-auto p-3">
            <div className="card-image">
                <Image className="mx-auto pb-2"
                    src = {banner} 
                    height={20}
                    width={200}      
                />
            </div>
            <div className="card-body ">
                <div className="content text-center ">
                    <h1>Product Title:</h1>
                    <p>Description: officia nesciunt, ipsa vitae quam dignissimos fuga, debitis unde t odit!</p>
                    <Link href="/components/Shop"> <button className="px-5 py-2 bg-red-400 border-none text-white rounded-sm mt-2">Shop Now</button></Link>
                </div>
            </div>
       </div>
       <div className="w-80 border-2 rounded-md mx-auto p-3">
            <div className="card-image">
                <Image className="mx-auto pb-2"
                    src = {banner} 
                    height={20}
                    width={200}      
                />
            </div>
            <div className="card-body ">
                <div className="content text-center ">
                    <h1>Product Title:</h1>
                    <p>Description: officia nesciunt, ipsa vitae quam dignissimos fuga, debitis unde t odit!</p>
                    <Link href="/components/Shop"> <button className="px-5 py-2 bg-red-400 border-none text-white rounded-sm mt-2">Shop Now</button></Link>
                </div>
            </div>
       </div>
       {/* <div className="card w-80 bg-gray-200 flex justify-center items-center flex-col p-5 rounded-md">
            <div className="card-image">
                <Image
                    src = {banner} 
                    height={20}
                    width={250}
                       
                />
            </div>
            <div className="card-body ">
                <div className="content text-center ">
                    <h1>Product Title:</h1>
                    <p>Description: officia nesciunt, ipsa vitae quam dignissimos fuga, debitis unde t odit!</p>
                    <Link href="/components/Shop"> <button className="px-5 py-2 bg-red-400 border-none text-white rounded-sm mt-2">Shop Now</button></Link>
                </div>
            </div>
       </div>
       <div className="card w-80 bg-gray-200 flex justify-center items-center flex-col p-5 rounded-md">
            <div className="card-image">
                <Image
                    src = {banner} 
                    height={20}
                    width={250}
                        
                />
            </div>
            <div className="card-body ">
                <div className="content text-center ">
                    <h1>Product Title:</h1>
                    <p>Description: officia nesciunt, ipsa vitae quam dignissimos fuga, debitis unde t odit!</p>
                    <Link href="/components/Shop"> <button className="px-5 py-2 bg-red-400 border-none text-white rounded-sm mt-2">Shop Now</button></Link>
                </div>
            </div>
       </div>
       <div className="card w-80 bg-gray-200 flex justify-center items-center flex-col p-5 rounded-md">
            <div className="card-image">
                <Image
                    src = {banner} 
                    height={20}
                    width={250}
                        
                />
            </div>
            <div className="card-body ">
                <div className="content text-center ">
                    <h1>Product Title:</h1>
                    <p>Description: officia nesciunt, ipsa vitae quam dignissimos fuga, debitis unde t odit!</p>
                    <Link href="/components/Shop"> <button className="px-5 py-2 bg-red-400 border-none text-white rounded-sm mt-2">Shop Now</button></Link>
                </div>
            </div>
       </div>
       <div className="card w-80 bg-gray-200 flex justify-center items-center flex-col p-5 rounded-md">
            <div className="card-image">
                <Image
                    src = {banner} 
                    height={20}
                    width={250}
                        
                />
            </div>
            <div className="card-body ">
                <div className="content text-center ">
                    <h1>Product Title:</h1>
                    <p>Description: officia nesciunt, ipsa vitae quam dignissimos fuga, debitis unde t odit!</p>
                    <Link href="/components/Shop"> <button className="px-5 py-2 bg-red-400 border-none text-white rounded-sm mt-2">Shop Now</button></Link>
                </div>
            </div>
       </div>        */}
    </div>
    </>
  )
}

export default Card