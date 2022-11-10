import React, { ReactNode, useRef } from "react";
import type { AppProps } from 'next/app'
import { Header } from '@components/header'
import { Sidebar } from '@components/sidebar'
import classNames from "classnames";
import Outside from "@utils/useoutside";

export const MainContainer = ({children, className}:any) => {
    const [mobile, setMobile] = React.useState(false)
      let mini  = mobile ? 'translate-x-0':'-translate-x-96'
      let blur  = mobile ? 'filter blur-sm':''
      let event = mobile ? 'pointer-events-none':''
      const itemRef = React.useRef(null);

      const content = (
        <div className={classNames('mr-2', className)}>
          <div className='w-[325px] bg-red-500 '>
            <Outside cb={()=>setMobile(false)} >
                {true && (
                  <div className={classNames(
                      'wrapper fixed h-screen p-4 z-10 lg:translate-x-0',
                      'transition ease-in-out delay-100',
                      mini
                    )}>
                      <Sidebar mobile={mobile} setMobile={setMobile} />
                  </div>
                )}
            </Outside>

          </div>
       
          <div 
            className={classNames(
            // blur, 
            'lg:ml-[325px] m-0 px-4 lg:px-0 -lg:blur-0 relative',
            'pt-4 lg:pr-2 ',
            )}>
            <Header  
              mobile={mobile}
              setMobile={setMobile}
            />
            <div className="content" ref={itemRef} >
              {children}
            </div>
          </div>
          {mobile && <div className="overlay"></div> }
        </div>
      )
      
    return (
       <React.Fragment>
          {content}
       </React.Fragment>
     )
}

export default MainContainer;

