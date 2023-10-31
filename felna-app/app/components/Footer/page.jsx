import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import igl from './../../../Images/felna-logo.png'
const Footer = () => {
  return (
    <>
    <footer className=' bg-slate-800 text-white '>
        <div className="grid grid-cols-2 px-16 py-5 gap-5 lg:grid-cols-3 2xl:grid-rows-1 2xl:grid-cols-4 2xl:container 2xl:mx-24">
            <div>
                <Link href='/'>
                    <Image
                    src={igl}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    />
                </Link> 
                <h3>IGL WEB LIMITED</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, a?</p>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href="/about"> About us</Link>
                    </li>
                    <li>
                        <Link href="/about"> Brances & Points</Link>
                    </li>
                    <li>
                        <Link href="/about"> Warrenty</Link>
                    </li>
                    <li>
                        <Link href="/about"> Emi</Link>
                    </li>
                    <li>
                        <Link href="/about"> Cookie Policy</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href="/about"> Order Procedure</Link>
                    </li>
                    <li>
                        <Link href="/about"> Home Delivery</Link>
                    </li>
                    <li>
                        <Link href="/about"> Refund Policy</Link>
                    </li>
                    <li>
                        <Link href="/about"> Payment Method</Link>
                    </li>
                    <li>
                        <Link href="/about"> Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link href="/about">Privacy Policy</Link>
                    </li>
                </ul>

            </div>
            <div>
                <ul>
                    <li>
                        <Link href="/about"> Contact Us</Link>
                    </li>
                    <p>Head Office</p>
                    <p>Igl Web Limited</p>
                    <p>Address:Dhanmondi-4</p>
                </ul>

            </div>
        </div>

        <div className='text-center font-bold text-black-100 py-10'>
            <p>Igl web limited @ copyright all rights reserved 2023</p>
        </div>
    </footer>
    </>
  )
}

export default Footer