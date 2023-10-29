import Link from 'next/link'

function Navbar() {
  return (
    <>
      {/* ===== Navbar Section Start ==== */}
      <section className="  bg-slate-100 w-full">
        <nav className=''>
            <ul className='flex flex-col items-center gap-5 p-3 sm:flex-col sm:gap-5 md:flex-col lg:flex-row lg:container lg:mx-auto lg:gap-5 xl:container xl:mx-auto xl:gap-10 2xl:gap-16'>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400'  href="/" >Home</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">Desktop</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">Laptop</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">Monitor</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">Ups</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">Phone</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">tablet</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">Camera</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">Security</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">Networking</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">Software</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">Accecories</Link>
                </li>
                <li>
                    <Link className='text-black transition-all hover:text-orange-400' href="/Components/Home">Contact</Link>
                </li>
            </ul>
        </nav>
    </section>
          {/* ===== Navbar Section End ==== */}
    </>
  )
}

export default Navbar