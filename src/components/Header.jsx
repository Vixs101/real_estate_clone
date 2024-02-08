import React from 'react'
import Logo from '../images/Logo.png'

export default function Header() {
  return (
    <div>
      <header>
        <div className="border-2">
           <img 
            src={Logo} 
            alt="website Logo"
            className="w-10" />
        </div>
      </header>
    </div>
  )
}
