import React from "react";
import { IconFrameDropdown } from "@components/frames/IconFrame";
import { Frame } from "@components/frames/MainFrame";
import PrivateLayout from "@layouts/PrivateLayout";
import { QuestionCircle } from "@shared/icons";
import { FaChevronDown } from "react-icons/fa";
import { faqList } from "@utils/mock";
import { FiChevronDown, FiChevronRight } from "react-icons/fi"; 

export const Faq = () => {
    const [status, setStatus] = React.useState(true)

    return (
        <Frame>
            <IconFrameDropdown 
                icon={<QuestionCircle className="menu-icon" />}
                title='Sıkça Sorulan Sorular'
                status={status}
                setStatus={setStatus}
            />
            {status && faqList.map((faq,i:number)=>(
                <Question key={`faq-${i}`} faq={faq} />
            ))}
        </Frame>
    )
}

Faq.Layout = PrivateLayout;

export default Faq;

export const Question = ({faq}:{faq: {title:string, body:string} }) => {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <div className='bg-white rounded-lg mb-3 p-3'>
                <div className='flex justify-between items-center cursor-pointer' onClick={()=>setOpen(!open)} >
                    <div className='flex items-center'>
                        <div><QuestionCircle className='fill-yg-blue' width='17' /></div>
                        <h3 className='text-gray-400 ml-4 text-base'>{faq.title}</h3>
                    </div>
                    <div>
                       { open ? <FiChevronDown size={21} className='stroke-1 text-gray-800' /> :  <FiChevronRight size={21} className='stroke-1 text-gray-800' />}
                    </div>
                </div>
                {open && (
                    <Answer body={faq.body} />
                )}
            </div>
        </React.Fragment>
    )
}

export const Answer = ({body}:{body:string}) => {
    return(
        <div className='m-2 ml-3 pl-3 border-l-[1px] text-gray-900'>
            {body}
        </div>
    )
}