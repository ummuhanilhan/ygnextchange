import { ArrowLeftCircle, ArrowRightCircle, ArrowRightShort  } from "@yukgetir-icons"
import React from "react"

export const SimplePagination = () => {

    return (
        <React.Fragment>
            <div className='simple-pagination flex justify-between bg-white rounded-md py-2 pr-2 my-2 mt-3'>
                <div></div>
                <div className='flex items-center'>
                    <div className=''><ArrowLeftCircle width={21} className='fill-yg-blue mx-2 cursor-pointer' /></div>
                    <ul className="flex items-center">
                        <li className="text-yg-blue mx-3 text-lg cursor-pointer">1</li>
                        <li className="text-gray-400 mx-3 text-lg cursor-pointer">2</li>
                        <li className="text-gray-400 mx-3 text-lg cursor-pointer">3</li>
                        <li className="text-gray-400 mx-3 text-lg cursor-pointer">...</li>
                        <li className="text-gray-400 mx-3 text-lg cursor-pointer">10</li>
                    </ul>
                    <div className=''><ArrowRightCircle width={21} className='fill-yg-blue mx-2 cursor-pointer' /></div>
                </div>
                <div className='flex items-end '>
                    <div className="border border-1 border-yg-blue rounded-md p-1 flex justify-between">
                        <input type="number" className='px-2 border-none outline-none text-center 
                        text-yg-blue w-12' placeholder='' />
                        <div className='bg-yg-blue cursor-pointer'>
                            <ArrowRightShort width={21} className='fill-white' />
                        </div>
                    </div>
                </div>
            </div>
      </React.Fragment>
    )
}

