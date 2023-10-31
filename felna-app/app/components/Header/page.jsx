import Image from 'next/image'
import Link from 'next/link'
import logo from './../../../Images/felna-logo.png'
import user from './../../../Images/user.png'
import Search from './../../../Images/search.png'
import Add from './../../../Images/picture.jpg'
const Header = () => {
  return (
    <>
    {/* ========= Header section Start ======== */}
    <header className="w-full h-auto bg-black overflow-hidden ">
      <div className=''>
        <div className='text-white text-center pt-1 sm:flex gap-4 sm:justify-center items-center lg:pt-2'>
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
            <div className="w-52 relative md:w-96">
              <input
                type="text"
                className="w-full h-10 px-3 py-2 text-gray-700 border-2 border-gray-200 rounded-lg focus:outline-none "
                placeholder="Search..."
              />
              <button className="absolute top-1 right-3 p-1 rounded-md ">
               <Image className=''
                src={Search}
                width={22}
                height={20}
               />
              </button>
            </div>

            {/* <form action="">
              <input type="text" placeholder='Search' />
            </form> */}
          </div>
          <div className="icon flex">
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
                  <Link href = "/components/Register">
                    <h3 className='text-white transition-all hover:text-orange-400 text-sm'>Registration</h3>
                  </Link>
                  <Link href = "/components/Login">
                    <h3 className='text-white transition-all hover:text-orange-400 text-sm ml-3 '>Login</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Link href="#">
                <Image
                  src={Add}
                  width={50}
                  height={40}
                />
              </Link>
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
