import Image from 'next/image'
import Link from 'next/link'
import logo from './../../../Images/felna-logo.png'
import user from './../../../Images/user.png'
const Header = () => {
  return (
    <>
    {/* ========= Header section Start ======== */}
    <header className="w-full h-auto bg-black overflow-hidden ">
      <div className=''>
        <div className='text-white text-center sm:flex gap-4 sm:justify-center items-center'>
          <div>
            <Link href="#">
              <p>+880237858787587</p>
            </Link>
          </div>
          <div>
            <Link href="#">
              <p>johaigl@gmail.com</p>
            </Link>
          </div>
        </div>
        <div className="header container mx-auto flex flex-col items-center gap-3 py-5 sm:flex-row md:flex-row md:justify-center lg:flex-row lg:justify-between">
          <div className="logo">
            <Link href="#">
              <Image
                src={logo}
                alt="Picture of the author"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="search">
            <form action="">
              <input type="text" placeholder='Search' />
            </form>
          </div>
          <div className="icon">
            <div className="flex">
              <div>
                <Link href="#">
                  <Image
                    src={user}
                    width={40}
                    height={30}
                    alt="Picture of the author"
                  />
                </Link>
              </div>
              <div>
                <p className='text-white transition-all hover:text-orange-400 text-sm'>Account</p>
                <div className="flex">
                  <Link href = "/">
                    <h3 className='text-white transition-all hover:text-orange-400 text-sm'>Registration</h3>
                  </Link>
                  <Link href = "/">
                    <h3 className='text-white transition-all hover:text-orange-400 text-sm ml-3 '>Login</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
            
        </div>
      </div>

    </header>
    {/* ========= Header section End ======== */}
      
    </>
  )
}

export default Header
