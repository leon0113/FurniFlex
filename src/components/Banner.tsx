import BrandName from "./BrandName";

export default function Banner() {
    return (
        <div className='w-1/2 h-screen bg-[url("/auth-pic.png")] bg-cover bg-left '>
            <div className='w- full h-full flex flex-col justify-center items-center text-center gap-2'>
                {/* logo */}
                <div className='w-20 h-20'>
                    <img src="/icon.png" alt="" />
                </div>
                {/* name  */}
                <BrandName className="text-white" />
                {/* text  */}
                <p className='text-gray-400 px-20'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit non omnis dolores asperiores animi id natus dicta iure distinctio molestiae! Lorem ipsum dolor,
                </p>
            </div>
        </div>
    )
}
