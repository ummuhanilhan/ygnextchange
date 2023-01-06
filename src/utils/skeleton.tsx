
export const SkeletonLoading = () => (
    <div className='bg-white- p-4 rounded-md
    space-y-4 divide-y divide-gray-200 
    animate-pulse dark:divide-gray-700 md:p-6 w-full
    '>
        <div className="flex items-center justify-between">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5"></div>
                <div className="w-72 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="w-72 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 "></div>
                <div className="w-72 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
    </div>
)