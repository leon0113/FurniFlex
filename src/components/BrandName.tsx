

export default function BrandName({ className }: { className: string }) {
    return (
        <h1 className={` text-4xl font-bold tracking-wide leading-10 ${className}`}>
            Furni<span className='text-blue-500'>Flex</span>
        </h1>
    )
}
