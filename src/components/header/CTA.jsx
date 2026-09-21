import React from 'react'
import CV from '../../assets/Villanueva_Joseph.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Download CV</a>
        <a href="#contact" className='btn'>Let&apos;s Talk</a>
    </div>
  )
}

export default CTA