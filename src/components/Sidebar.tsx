export default function Sidebar({ handleCategoryChange, activeCategory, selectedCategory }: any) {
    const categories = ["Rocking chair", "Side chair", "Lounge chair"];
    return (
        <div className="flex flex-col h-auto p-3 w-full md:w-[250px] lg:w-[300px] border-r dark:text-gray-800">
            <div className="space-y-3">
                <div className="flex-1">
                    <div className="pt-2 pb-4 space-y-3 text-sm">
                        {
                            categories.map((category) => (<div className="rounded-lg border-b ">
                                <button
                                    onClick={() => handleCategoryChange(category)}
                                    className={`w-full flex text-gray-900 hover:bg-gray-900 hover:text-gray-100 items-center font-semibold text-xl p-2 space-x-3 rounded-md  ${activeCategory === category ? 'bg-gray-900 text-white' : ""}`}>
                                    {category}
                                </button>
                            </div>))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}
