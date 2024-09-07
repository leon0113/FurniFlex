import Li from './Li';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="pb-0 pt-6 dark:text-gray-900">
            <div className="bg-black px-6 md:px-20 lg:px-48 pt-20 pb-10 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">

                {/* Upper Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full">
                                <img src="/icon.png" alt="logo" />
                            </div>
                            <h1 className="text-3xl font-bold tracking-wide leading-10 text-white">
                                Furni<span className='text-blue-500'>Flex</span>
                            </h1>
                        </a>
                    </div>

                    {/* About Us Section */}
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

                    {/* Explore EEVE Section */}
                    <div className="col-span-6 text-center md:text-left md:col-span-2">
                        <p className="pb-6 text-gray-200 text-lg font-medium">Explore EEVE</p>
                        <ul>
                            <Li name='Unlock my Robot Power' />
                            <Li name='Starlight' />
                            <Li name='Robot Platform' />
                            <Li name='EEVE Roadmap' />
                        </ul>
                    </div>

                    {/* Community Section */}
                    <div className="col-span-6 text-center md:text-left md:col-span-2">
                        <p className="pb-6 text-gray-200 text-lg font-medium">Community & Support</p>
                        <ul>
                            <Li name='Willow X Community' />
                            <Li name='Developer & Maker Access' />
                            <Li name='Special Cases' />
                        </ul>
                    </div>
                </div>

                {/* Lower Section */}
                <div className="pt-10">
                    <div className="flex flex-col gap-6 md:flex-row justify-between items-center text-gray-400">
                        {/* Social Media Icons */}
                        <div className='flex gap-3 justify-center'>
                            <FiFacebook />
                            <FaInstagram />
                            <BsTwitterX />
                            <FiLinkedin />
                        </div>

                        {/* Links */}
                        <ul className='flex gap-4 justify-center'>
                            <Li name='March22 Recap' />
                            <Li name='Privacy Policy' />
                            <Li name='General Terms' />
                            <Li name='Contact' />
                        </ul>

                        {/* Language Selector */}
                        <div className='flex gap-2 items-center justify-center'>
                            <img src="/usa.png" alt="country flag" />
                            <p>United States (English)</p>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <p className='text-gray-600 font-medium text-base pt-10 text-center'>
                        EEVE @ 2024. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
