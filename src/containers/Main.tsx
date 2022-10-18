import React, { ReactNode } from "react";
import type { AppProps } from 'next/app'
import { Header } from '@components/header'
import { Sidebar } from '@components/sidebar'
import classNames from "classnames";
import Outside from "@utils/useOutside";

export const MainContainer = ({children, className}:any) => {
    const [mobile, setMobile] = React.useState(false)
        
      let mini  = mobile ? 'translate-x-0':'-translate-x-96'
      let blur  = mobile ? 'filter blur-sm':''
      let event = mobile ? 'pointer-events-none':''

      const content = (
        <div className={classNames('', className)}>
          <Outside cb={()=>setMobile(false)} className='w-full'>
              <div className={classNames(
                  'wrapper fixed h-screen p-4 z-10 lg:translate-x-0 transition ease-in-out delay-100',
                  mini
                )}>
                <Sidebar mobile={mobile} setMobile={setMobile} />
            </div>
          </Outside>

          <div className={classNames(blur, 
            'lg:ml-[325px] m-0 px-4 lg:px-0 lg:blur-0 w-fill',
            'pt-4 lg:pr-2 lg:h-[100vh]',
            )}>
            <Header  
              mobile={mobile}
              setMobile={setMobile}
            />
            <div className="content mb-14 lg:h-[100vh]">
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

