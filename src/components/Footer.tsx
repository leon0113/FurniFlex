import React from 'react';
import Li from './Li';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="py-6 dark:bg-gray-100 dark:text-gray-900">
            <div className="bg-black px-48 pt-20 pb-10 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full">
                                <img src="/icon.png" alt="" />
                            </div>
                            <h1 className={` text-3xl font-bold tracking-wide leading-10 text-white`}>
                                Furni<span className='text-blue-500'>Flex</span>
                            </h1>
                        </a>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-2">
                        <p className="pb-6 text-gray-200 text-lg font-medium">About US</p>
                        <ul>
                            <Li name='Master Plan' />
                            <Li name='Jobs' />
                            <Li name='Invest' />
                            <Li name='Pressroom' />
                            <Li name='Blog' />
                            <Li name='Contact' />

                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-2">
                        <p className="pb-6 text-gray-200 text-lg font-medium">Explore EEVE</p>
                        <ul>
                            <Li name='Unlock my Robot Power' />
                            <Li name='Starlight' />
                            <Li name='Robot Platform' />
                            <Li name='EEVE Roadmap' />

                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-2">
                        <p className="pb-6 text-gray-200 text-lg font-medium">Community & Support</p>
                        <ul>
                            <Li name='Willow X Community' />
                            <Li name='Developer & Maker Access' />
                            <Li name='Special Cases' />

                        </ul>
                    </div>
                </div>

                {/* ---------------------------------  */}

                <div>
                    <div className='text-gray-400 flex w-full justify-between items-center pt-10'>
                        <div className='flex gap-3'>
                            <FiFacebook />
                            <FaInstagram />
                            <BsTwitterX />
                            <FiLinkedin />
                        </div>
                        <ul className='flex gap-4'>
                            <Li name='March22 Recap' />
                            <Li name='Privacy Policy' />
                            <Li name='General Terms' />
                            <Li name='Contact' />
                        </ul>
                        <div className='flex gap-2'>
                            <img src="/usa.png" alt="" />
                            <p>United States (English)</p>
                        </div>
                    </div>
                    <p className='text-gray-600 font-medium text-base pt-10 flex justify-center'>EEVE @ 2024. All rights reserved.</p>

                </div>



            </div>
        </footer>
    )
}
