import { useState } from 'react'
import banner from './assets/img/tarot-banner.webp'
import { Button } from "@/components/ui/button"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-dvh md:w-full'>
        <img src={banner} alt="Tarot Banner" className='h-screen w-full object-cover' />
      </div>
    </>
  )
}

export default App
