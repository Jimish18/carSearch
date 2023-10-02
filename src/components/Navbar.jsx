import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (

    <div>
        <nav className='navbardiv'>
            <form className="d-flex searchBox" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>

        </nav>
    </div>
  )
}

export default Navbar