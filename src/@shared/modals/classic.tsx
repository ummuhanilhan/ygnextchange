import React from 'react'
import Modal from 'react-modal';

type props = {
    status?:boolean,
    close:Function,
    title?:string,
    styles?:any,
    children?:any,
}
const Classic = ({status, close, title, styles, children}:props) => {
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
          {children}
        </Modal>
      
    )
}
export default Classic


