import { IoBagOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

export default function Navbar() {
    return (
        <header className="p-4 w-full border-b  dark:text-gray-800">
            <div className="container flex justify-between  mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 gap-1">
                    <img src='/icon.png' className='w-10 h-10' />
                    <h1 className={` text-lg font-bold tracking-wide leading-10`}>
                        Furni<span className='text-blue-500'>Flex</span>
                    </h1>
                </a>
                <ul className="items-center flex-shrink-0 hidden lg:flex">
                    <li className="flex py-0">
                        <a rel="noopener noreferrer" href="#" className="self-center px-4 py-2  rounded-lg font-semibold  hover:bg-gray-200">Home</a>
                    </li>
                    <li className="flex py-0">
                        <a rel="noopener noreferrer" href="#" className="self-center px-4 py-2  rounded-lg font-semibold  hover:bg-gray-200">Products</a>
                    </li>
                    <li className="flex py-0">
                        <a rel="noopener noreferrer" href="#" className="self-center px-4 py-2  rounded-lg font-semibold  hover:bg-gray-200">Categories</a>
                    </li>
                    <li className="flex py-0">
                        <a rel="noopener noreferrer" href="#" className="self-center px-4 py-2  rounded-lg font-semibold  hover:bg-gray-200">Custom</a>
                    </li>
                    <li className="flex py-0">
                        <a rel="noopener noreferrer" href="#" className="self-center px-4 py-2  rounded-lg font-semibold  hover:bg-gray-200">Blog</a>
                    </li>

                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <div className="relative">
                        <button className="self-center px-4 py-0 rounded">
                            <IoBagOutline className="w-8 h-8" />
                        </button>

                        {/* Badge for the number */}
                        <span className="absolute -bottom-0 left-3/4 transform -translate-x-3/4 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                            3 {/* Number of items */}
                        </span>
                    </div>
                    <a href="#" className="self-center px-4 py-0 font-semibold rounded">
                        <RxAvatar className="w-6 h-6" />
                    </a>
                </div>
                {/* <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button> */}
            </div>
        </header>
    )
}
