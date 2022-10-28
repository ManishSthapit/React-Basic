import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
    const cart_store = useSelector(store=>store.cartStore)
    const cart_items = cart_store.cart_items
    const cart_items_number = cart_items.length
  return (
    <>
    
    <header className="p-3 text-bg-dark">
    <div className="container">
      
        

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-between mb-md-0">
          <li><Link to="/" className="nav-link px-2 text-white fs-5"><i className='bi bi-house fs-3 me-2'></i>Home</Link></li>
          <li><Link to="/Cart" className="nav-link px-2 text-white fs-5">Cart<i className='bi bi-cart fs-3 ms-2'></i>{
            cart_items_number


          }
          </Link></li>
          
        </ul>

        {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form> */}

        
      
    </div>
  </header>

    </>
  )
}

export default Navbar