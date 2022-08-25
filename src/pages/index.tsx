import { Sidebar } from '@components/sidebar'
import { Apple } from '@yukgetir-icons'
import type { NextPage } from 'next'
const Home: NextPage = () => {
   
  return (
    <div className='h-screen p-4'>
        <Sidebar />
    </div>
  )
}

export default Home
