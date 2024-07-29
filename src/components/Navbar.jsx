import React from 'react'


function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="p-4 navbar-brand" href="#">Verstronet</a>
            <div className="container">
            <a className="navbar-brand" href="#">Features</a>
            <a className="nav-link" href="#">Solutions</a>
            <a className="nav-link" href="#">Classes</a>
            <a className="nav-link" href="#">Pricing</a>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button>
                <a className="nav-link" href="#">Join Classes</a>
            </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar