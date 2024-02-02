import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import collegecampus from '@/public/collegecampus.jpg'
import '../login/style.css'

const page = () => {
    return (
        <>

            <div className='flex justify-around bg-gray-100 w-full h-screen' style={{ '@media (max-width: 770px)': { display: 'none' } }}>

                <div className='collegecamp w-1/2 h-screen' >
                    <Image className='-ml-[20%]'
                        src={collegecampus}
                        layout="fill"
                        objectFit="cover"
                        alt="College Campus Image"
                    />
                </div>

                <div style={{}} className="signform z-[4] w-1/2 min-h-screen bg-gray-100 flex flex-col justify-center py-8 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="text-center text-sm text-gray-600 max-w">
                            Or <Link href="/login" className="font-medium text-[#841FEB] hover:text-[#aa6aeb]">
                                Already a member? Login here
                            </Link>
                        </p>
                    </div>

                    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="formbg bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10">
                            <form className="space-y-6" action="#" method="POST">


                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="fullname"
                                            type="text"
                                            name="fullName"
                                            required
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#841FEB] focus:border-[#841FEB] focus:z-10 sm:text-sm"
                                            placeholder="Enter your Full name"
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="username"
                                            type="text"
                                            name="username"
                                            required
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#841FEB] focus:border-[#841FEB] focus:z-10 sm:text-sm"
                                            placeholder="Enter your Prefered Username"
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#841FEB] focus:border-[#841FEB] focus:z-10 sm:text-sm"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#841FEB] focus:border-[#841FEB] focus:z-10 sm:text-sm"
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember_me"
                                            name="remember_me"
                                            type="checkbox"
                                            className="h-4 w-4 text-[#841FEB] focus:ring-[#841FEB] border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <Link href="#" className="font-medium text-[#841FEB] hover:text-[#841FEB]">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#841FEB] hover:bg-[#841FEB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#841FEB]"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-gray-100 text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-3 gap-3">
                                    <div>
                                        <Link
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                        >
                                            <img className="h-5 w-5" src="https://www.svgrepo.com/show/303117/facebook-2-logo.svg" alt="" />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                        >
                                            <img className="h-5 w-5" src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="" />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                        >
                                            <img className="h-6 w-6" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
