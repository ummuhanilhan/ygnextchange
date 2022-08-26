import type { AppProps } from 'next/app'
import { Header } from '@components/header'
import { Sidebar } from '@components/sidebar'
export const MainContainer = ({children}:any) => {

    return (
      <div className='h-screen flex items-start '>
          <Sidebar />
        <div className='ml-[325px] w-full mt-4 mr-4 pb-3'>
          <Header />
          <div className="content mt-3">
            {children}
          </div>
        </div>
      </div>
    )
}

export default MainContainer;
