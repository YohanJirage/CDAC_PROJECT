import React from 'react'
import {Link} from 'react-router-dom'

export default function AdminHome() {
    return (
        <div className="fs-4">

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/" className='nav-link px-3'>
                            Build<span className="text-warning">Mart</span>
                            </Link>
                            <li className="nav-item ">
                                <Link to="/home" className='nav-link px-3'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/v_categories" className='nav-link px-3'>View Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add_category" className='nav-link px-3'>Add Category</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/v_vendors" className='nav-link px-3'>View Vendors</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/v_customers" className='nav-link px-3'>View Customers</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/logout" className='nav-link px-3'>Logout</Link>
                            </li>
                        </ul>
                    </div>

                </nav>
              
            </div>
        </div>
    )
}
