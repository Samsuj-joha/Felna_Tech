"use client"
import Camera from '@/app/components2/Camera/page'
import Desktop from '@/app/components2/Desktop/page'
import DropdownMenu from '@/app/components2/Home/page'
import Laptop from '@/app/components2/Laptop/page'
import Monitor from '@/app/components2/Monitor/page'
import Phone from '@/app/components2/Phone/page'
import Software from '@/app/components2/Software/page'
import Tablet from '@/app/components2/Tablet/page'
import Ups from '@/app/components2/Ups/page'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      {/* ===== Navbar Section Start ==== */}
      <section className="  bg-white w-full">
        <nav className=''>
            <ul className='flex flex-col items-center gap-5 p-3 sm:flex-col sm:gap-5 md:flex-col lg:flex-row lg:container lg:mx-auto lg:gap-5 xl:container xl:mx-auto xl:gap-10 2xl:gap-12'>
                <li>
                    <Link className='text-black transition-all'  href="/" > <DropdownMenu/> </Link>
                    
                </li>
                <li>
                    <Link className='text-black transition-all'  href="/"> <Desktop/> </Link>
                </li>
                <li>
                    <Link className='text-black transition-all'  href="/"> <Laptop/> </Link>
                </li>
                <li>
                    <Link className='text-black transition-all'  href="/"> <Monitor/>  </Link>
                </li>
                <li>
                    <Link className='text-black transition-all ' href="/"> <Ups/> </Link>
                </li>
                <li>
                    <Link className='text-black transition-all ' href="/"> <Phone/> </Link>
                </li>
                <li>
                    <Link className='text-black transition-all ' href="/"> <Tablet/> </Link>
                </li>
                <li>
                    <Link className='text-black transition-all ' href="/"> <Camera/> </Link>
                </li>
                <li>
                    <Link className='text-black transition-all' href="/">Security</Link>
                </li>
                <li>
                    <Link className='text-black transition-all ' href="/">Networking</Link>
                </li>
                <li>
                    <Link className='text-black transition-all' href="/"> <Software/> </Link>
                </li>
                <li>
                    <Link className='text-black transition-all' href="/">Accecories</Link>
                </li>
                <li>
                    <Link className='text-black transition-all' href="/">Contact</Link>
                </li>
            </ul>
        </nav>
    </section>
    {/* ===== Navbar Section End ==== */}
    </>
  )
}

export default Navbar