import { useState, useEffect } from 'react'
import './index.css'
import PropTypes from 'prop-types'

Logo.propTypes = {
  setPage: PropTypes.func.isRequired
}

function Logo ({ setPage }) {
  const content = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
  const [value, setValue] = useState(content)
  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const num = Math.floor(Math.random() * (max - min) + min)
    return num
  }
  useEffect(() => {
    setTimeout(() => {
      const newArray = [...value]
      newArray.shift()
      newArray.push(getRandomInt(0, 2))
      setValue(newArray)
    }, 80)
  }, [value])
  return (
    <>
      <div className='logo' onClick={() => { setPage('Home') }}>
        <div className='logo-0'>{value[0]}</div>
        <div className='logo-1'>{value[1]}</div>
        <div className='logo-2'>{value[2]}</div>
        <div className='logo-3'>{value[3]}</div>
        <div className='logo-4'>{value[4]}</div>
        <div className='logo-5'>{value[5]}</div>
        <div className='logo-6'>{value[6]}</div>
        <div className='logo-7'>{value[7]}</div>
        <div className='logo-8'>{value[8]}</div>
        <div className='logo-9'>{value[9]}</div>
        <div className='logo-10'>{value[10]}</div>
        <div className='logo-11'>{value[11]}</div>
        <div className='logo-12'>{value[12]}</div>
        <div className='logo-13'>{value[13]}</div>
        <div className='logo-14'>{value[14]}</div>
        <div className='logo-15'>{value[15]}</div>
      </div>
    </>
  )
}

export default Logo
