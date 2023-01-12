import { ArrowLeftCircle, ArrowRightCircle, ArrowRightShort  } from "@yukgetir-icons"
import React, { useRef, useState } from "react"
import { Ripple } from "primereact/ripple";
import { Paginator } from 'primereact/paginator';
import classNames from "classnames";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Slider } from "primereact/slider";


export const SimplePagination = ({  itemsPerPage }:any) => {
    const [first, setFirst] = useState(0)
    const [customFirst1, setCustomFirst1] = useState(0);
    const [customRows1, setCustomRows1] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState('Press \'Enter\' key to go to this page.');
    const [total, setTotal] = useState(120);
 
    const onCustomPageChange1 = (event:any) => {
        setCustomFirst1(event.first);
        setCustomRows1(event.rows);
        setCurrentPage(event.page + 1);
    }

    const template:any = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        'PrevPageLink': (options:any) => {
            return (
            <button onClick={options.onClick} disabled={options.disabled} ><ArrowLeftCircle width={21} className='fill-yg-blue mx-2 cursor-pointer' /></button>
            )
        },
        'NextPageLink': (options:any) => {
            return (
                <button  type="button" onClick={options.onClick} disabled={options.disabled}><ArrowRightCircle width={21} className='fill-yg-blue mx-2 cursor-pointer' /></button>
            )
        },
        'PageLinks': (options:any) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames('mx-2',{ 'p-disabled': true });

                return <span className={className} style={{ userSelect: 'none' }}>...</span>;
            }

            return (
               <button onClick={options.onClick} className={classNames("text-gray-400 mx-1 text-lg cursor-pointer", options.className)} >{options.page + 1}  <Ripple /> </button>

            )
        },
        'CurrentPageReport': () => <></>,
        'FirstPageLink': (options:any) => {
            // options.onClick: Click event for the default element.
            // options.className: Style class of the default element.
            // options.iconClassName: Style class of the default icon element.
            // options.disabled: Indicates whether the element is disabled.
            // options.element: Default element created by the component.
            // options.props: Component props.
    
            return <div>FİRST</div>
        },
        'LastPageLink': (options:any) => {
            return <button 
                    onClick={options.onClick} 
                    disabled={options.disabled} 
                    >
                    <ArrowRightCircle width={21} 
                    className='fill-yg-blue mx-2 cursor-pointer' />
                </button>
        },
    };

        
    const justReport:any = {
    
        'CurrentPageReport': (options:any) => {
            const ref = useRef<HTMLInputElement>(null)
            return (
                <div className='flex items-end '>
                    <div className="border border-1 border-yg-blue rounded-md p-1 flex justify-between"
                        style={{ color: 'var(--text-color)', userSelect: 'none' }}
                    >
                        <input type="number" className='px-2 border-none outline-none text-center 
                        text-yg-blue w-12' placeholder=''
                              ref={ref}
                              value={currentPage} 
                            onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange}
                        />
                        <div className='bg-yg-blue cursor-pointer'
                        onClick={(e)=>onPageInputKeyDown(ref.current, options)}
                        >
                            <ArrowRightShort width={21} className='fill-white' />
                        </div>
                    </div>
                </div>

            )
        }
    };           


    const onPageInputKeyDown = (event:any, options:any) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`);
            }
            else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setCustomFirst1(first);
                setPageInputTooltip('Press \'Enter\' key to go to this page.');
            }
        }
    }

    const onPageInputChange = (event:any) => {
        setCurrentPage(event.target.value);
    }

    return (
      <React.Fragment>
        <div className='simple-pagination flex justify-between bg-white rounded-md py-2 pr-2 my-2 mt-3'>
            <div>
                <div className="pl-5 flex items-center justify-center h-full text-gray-400 text-lg cursor-pointer">
                    { customFirst1 / customRows1 +1 }  / {total/customRows1}
                </div>
            </div>
            <Paginator 
                template={template} 
                first={customFirst1} 
                rows={customRows1} 
                totalRecords={total} 
                onPageChange={onCustomPageChange1} 
            />
    
            <Paginator 
                template={justReport} 
                first={customFirst1} 
                rows={customRows1} 
                totalRecords={total} 
                onPageChange={onCustomPageChange1} 
            />
        </div>

      </React.Fragment>
    )
}




export const Pag = () => {
    return (
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
    )
}