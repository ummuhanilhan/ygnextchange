import useDimensions from '@utils/useDimensions';
import React from 'react'
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';

type props = {
    status?:boolean,
    close:Function,
    title?:string,
    overlay?:any,
    styles?:any,
    children?:any,
    header?:any,
    className?:string,
}

const Classic = ({status, close, title, styles, overlay, children, header, className}:props) => {
    const [ref, { width }]:any = useDimensions();

    React.useEffect(()=>{
      console.log('width')
    },[width])

    const closeModal = (e: React.MouseEvent) => {
      e.preventDefault()
      close(false);
    } 

    const customStyles: any = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 114,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        WebkitBackdropFilter: 'blur(3px)',
        backdropFilter: 'blur(5px)',
        ...overlay,
      },
      content: {
        position: 'absolute',
        top: '30px',
        left: '25%',
        right: '25%',
        bottom: '30px',
        background: '#fff',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        zIndex: 115,
        padding: '0 15px',
        height:'auto',
        ...styles,
      }
    };
    
    return (
        <Modal
            onRequestClose={closeModal}
            style={customStyles}  
            ariaHideApp={false}
            isOpen={status||false}
        >
          <div 
            className={className}
          >
          {header && header}
          {children}
          </div>
        </Modal>
      
    )
}
export default Classic

export const ModalHeader = () => {
  
  return (
      <div className='flex justify-between w-full'>
        <div></div>
        <div><FiX size={15} /></div>
      </div>
  )
}

export const ModalFooter = () => {}

