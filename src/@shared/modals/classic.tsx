import useDimensions from '@utils/useDimensions';
import React from 'react'
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';

export type modalState = {
    status?:boolean,
    close:Function,
    title?:string,
    overlay?:any,
    styles?:any,
    children?:any,
    header?:any,
    className?:string,
}

export const Classic = ({status, close, title, styles, overlay, children, header, className}: modalState) => {
    const [ref, { width }]:any = useDimensions();

    React.useEffect(()=>{
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
        ...defaultOverlays,
        ...overlay,
      },
      content: {
        position: 'absolute',
        top: '30px',
        bottom: '30px',
        background: '#fff',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        zIndex: 115,
        ...defaultStyles,
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


export const defaultStyles = {
  height:'fit-content',
  left:'20%',
  right:'20%',
  borderRadius:'10px',
  overflow:'visible',
  padding:'1em',
}

export const defaultOverlays = {
  backgroundColor:'rgba(0, 0, 0, 0.5)',
  WebkitBackdropFilter: 'blur(0)',
  backdropFilter: 'blur(0)',
}


export const default15 = {
  padding:0,
  height:'fit-content',
  left:'15%',
  right:'15%' 
}