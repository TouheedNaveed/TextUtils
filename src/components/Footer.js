import React from 'react'
import './Footer.css'
export default function Footer(props) {
  const date = new Date();
  return (
    <div className='footer' style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#212529' : '#cbd7e2' }}>
      <p className='p'>Copyright {date.getFullYear()} </p>
    </div>
  )
}
