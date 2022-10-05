import React, { ReactNode } from "react";
import type { AppProps } from 'next/app'
import { Header } from '@components/header'
import { Sidebar } from '@components/sidebar'
import classNames from "classnames";
import Outside from "@utils/useoutside";

export const MainContainer = ({children}:any) => {
    const [mobile, setMobile] = React.useState(false)
        
      let mini  = mobile ? 'translate-x-0':'-translate-x-96'
      let blur  = mobile ? 'filter blur-sm':''
      let event = mobile ? 'pointer-events-none':''

      const content = (
        <div className='h-screen flex items-start '>
          <Outside cb={()=>setMobile(false)}>
              <div className={classNames(
                  'wrapper fixed h-screen p-4 z-10 lg:translate-x-0 transition ease-in-out delay-100',
                  mini
                )}>
                <Sidebar mobile={mobile} setMobile={setMobile} />
            </div>
          </Outside>

          <div className={classNames(blur, 'lg:ml-[325px] w-screen m-0 lg:blur-0')}>
            <Header  
              mobile={mobile}
              setMobile={setMobile}
            />
            <div className="content mb-14 h-auto">
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

