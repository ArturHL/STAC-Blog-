import { useEffect, useState } from 'react'
import './index.css'

const IntroOverlay = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isOut, setIsOut] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false)
    }, 2800)
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setIsOut(false)
    }, 2400)
  }, [])

  if (isVisible) {
    return (
      <div className={`intro-overlay ${isOut ? 'active' : ''}`}>
        <div className='text-container'>
          <div className='text-part1'>Some Things </div>
        </div>
        <div className='text-container'>
          <div className='text-part2'>About Coding</div>
        </div>
      </div>
    )
  }
}

export default IntroOverlay
