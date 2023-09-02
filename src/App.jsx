import { useState } from 'react'
import './App.css'
import SectionSide from './components/SectionSide'
import ResumeRender from './components/ResumeRender'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <SectionSide
        title="Enter Your Information:"
      />
      <ResumeRender
        title="Your Resume:"
      />
    </div>
  )
}

export default App
