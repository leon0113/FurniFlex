export default function Sidebar() {
    return (
        <div className="flex flex-col h-auto p-3 w-full md:w-[250px] lg:w-[300px] border-r dark:text-gray-800">
            <div className="space-y-3">
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-3 text-sm">
                        <li className="rounded-lg border-b hover:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" className="flex text-gray-500 hover:text-white items-center font-semibold text-xl p-2 space-x-3 rounded-md">
                                Rocking chair
                            </a>
                        </li>
                        <li className="rounded-lg border-b hover:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" className="flex text-gray-500 hover:text-white items-center font-semibold text-xl p-2 space-x-3 rounded-md">
                                Side chair
                            </a>
                        </li>
                        <li className="rounded-lg border-b hover:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" className="flex text-gray-500 hover:text-white items-center font-semibold text-xl p-2 space-x-3 rounded-md">
                                Lounge chair
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
