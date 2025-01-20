import React, { use, useState } from 'react'
import loginIcon from '../assest/signin.gif';
import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Login = () => {
    const [hienthiPass, methodHienThiPass] = useState(false);

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        });
        console.log("data:", data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section id="login">
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 w-full max-w-md mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcon} className=' rounded-full' alt='login icons' />
                    </div>

                    <form className='mt-4' onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor='inp-email' className='inline-block mb-2'>Email:</label>
                            <div className='bg-slate-100 p-2'>
                                <input id='inp-email'
                                    type='email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    placeholder='enter email'
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor='inp-pass' className='inline-block mb-2'>Password:</label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input id='inp-pass'
                                    type={hienthiPass ? "text" : "password"}
                                    name='password'
                                    value={data.password}
                                    onChange={handleOnChange}
                                    placeholder='enter password'
                                    className='w-full h-full outline-none bg-transparent me-1' />
                                <div className='text-lg cursor-pointer' onClick={() => methodHienThiPass(state => !state)}>
                                    <span>
                                        {
                                            hienthiPass ?
                                                (
                                                    <IoEye />
                                                )
                                                :
                                                (
                                                    <FaEyeSlash />
                                                )
                                        }

                                    </span>
                                </div>
                            </div>
                            <Link to={"/forgot-password"} className='block w-fit ml-auto hover:text-red-500 hover:underline'>Forgot password</Link>
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-5 py-2 mx-auto block w-full max-w-[120px] rounded-full hover:scale-110 transition-all mt-6 mb-6'>Login</button>
                    </form>
                    <p className='py-4'>Don't have account? <Link to={"/sign-up"} className='text-red-600 hover:text-red-700 hover:underline'> Sign up</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Login