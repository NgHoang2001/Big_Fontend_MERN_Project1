import React from 'react'
import Logo from './Logo';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className='h-16 shadow-md bg-white'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                <div >
                    <Link to={"/"}>
                        <Logo w={90} h={50} />
                    </Link>
                </div>

                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
                    <input type='text' placeholder='search product here...' className='w-full outline-none pr-2' />
                    <div className='text-lg w-13 h-8 min-w-[50px] flex items-center justify-center rounded-r-full text-white  bg-red-700'>
                        <IoSearchSharp />
                    </div>
                </div>
                <div className='flex items-center gap-7'>
                    <div className='text-3xl cursor-pointer'>
                        <FaRegCircleUser />
                    </div>
                    <div className='text-2xl relative'>

                        <span><FaCartShopping /></span>

                        <div className='bg-red-600 text-white flex justify-center items-center rounded-full p-1 w-5 h-5 absolute -top-2 -right-3'>
                            <p className='text-sm'>2</p>
                        </div>
                    </div>

                    <div>
                        <Link to={"/login"} className='bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700'>Login</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header