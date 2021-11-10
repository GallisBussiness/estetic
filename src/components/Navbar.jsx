import React from 'react'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal'

function Navbar() {
    return (
        <>
          <header className="sticky top-0 bg-white z-10">
  <div className="container px-10 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <a href="/" className="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src="/logosansbg.png" alt="logo" className="w-28 h-28 object-cover" />
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-4xl font-extrabold justify-center">
      <Zoom>
              <Link to="/" className="mr-5 text-gray-900 hover:text-blue-900 hover:underline hover:transition duration-500">Accueil</Link>
      </Zoom>
      <Zoom>
              <Link to="/formations" className="mr-5 text-gray-900 hover:text-blue-900 hover:underline hover:transition duration-500">Nos Formations</Link>

      </Zoom>
      <Zoom>
              <Link to="/services" className="mr-5 text-gray-900 hover:text-blue-900 hover:underline hover:transition duration-500">Nos Services</Link>

      </Zoom>
      <Zoom>
              <a href="/" className="mr-5 text-gray-900 hover:text-blue-900 hover:underline hover:transition duration-500">Notre équipe</a>

      </Zoom>
      <Zoom>
              <Link to="/contact" className="mr-5 text-gray-900 hover:text-blue-900 hover:underline hover:transition duration-500">Contact</Link>
      </Zoom>
    </nav>
    <a href="tel:+221 33 832 89 64" className="mr-5 text-gray-900 hover:text-blue-900 text-lg font-normal font-lora">
      <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg> </span> +221 33 832 89 64</a>
  </div>
   </header>
        </>
    )
}

export default Navbar
