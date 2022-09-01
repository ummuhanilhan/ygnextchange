import React, { ReactNode } from "react";
import type { AppProps } from 'next/app'
import { Header } from '@components/header'
import { Sidebar } from '@components/sidebar'
import classNames from "classnames";
export const MainContainer = ({children}:any) => {
    const [mobile, setMobile] = React.useState(false)
        
      let mini  = mobile ? 'translate-x-0':'-translate-x-96'
      let blur  = mobile ? 'filter blur-sm':''
      let event = mobile ? 'pointer-events-none':''

      
    return (
      <div className='h-screen flex items-start'>
          <div className={classNames(
            'wrapper fixed h-screen p-4 z-1 lg:translate-x-0 transition ease-in-out delay-100',
            mini
          )}>
          <Sidebar mobile setMobile={setMobile} />
       </div>
        <div className={classNames(blur, 'lg:ml-[325px] w-screen m-4 lg:blur-0')}>
          <Header  
            mobile={mobile}
            setMobile={setMobile}
          />
          <div className="content mt-3">
            {children}
          </div>
        </div>
        {mobile && <div className="overlay"></div> }
      </div>
    )
}

export default MainContainer;
