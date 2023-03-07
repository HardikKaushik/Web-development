import React from 'react'
import './feed.css';

function Navbar() {
  return (
    <header class="text-gray-600 body-font navbar">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
        <span class="ml-3 text-xl">Note-App</span>
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
       
      </nav>
     
    </div>
  </header>
  )
}

export default Navbar
