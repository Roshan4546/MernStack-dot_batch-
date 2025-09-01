// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Testimonial from './components/Testimonial';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1>Our Testimonials</h1>
        <div className='line'></div>
        <Testimonial></Testimonial>
      </div>
    </>
  )
}

export default App
