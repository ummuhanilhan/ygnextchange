import type { AppProps } from 'next/app'
import { Header } from '@components/header'
import { Sidebar } from '@components/sidebar'
export const MainContainer = ({children}:any) => {

    return (
      <div className='h-screen p-4 flex items-center '>
          {children}
      </div>
    )
}

export default MainContainer;