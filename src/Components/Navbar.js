import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar(props) {


  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/links">Links</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item">Action</a></li>
                  <li><a className="dropdown-item" >Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" >Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <div>
              <button type="button" onClick={()=>{props.toggle('success')}} className="btn btn-success rounded-circle mx-2 p-3" ></button>
              <button type="button" onClick={()=>{props.toggle('danger')}} className="btn btn-danger rounded-circle mx-2 p-3"></button>
              <button type="button" onClick={()=>{props.toggle('warning')}} className="btn btn-warning rounded-circle mx-2 p-3"></button>
              <button type="button" onClick={()=>{props.toggle('info')}} className="btn btn-info rounded-circle mx-2 p-3"></button>
              <button type="button" onClick={()=>{props.toggle('dark')}} className="btn btn-dark rounded-circle mx-2 p-3"></button>
              <div className="form-check form-switch ">
               {/* <input className="form-check-input" onClick={()=>{props.toggle(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
                <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'} `} style={{textAlign:'center'}} htmlFor="flexSwitchCheckDefault">Enable mode</label>
              </div></div>
          </div>
        </div>
      </nav>
    </>)
}
