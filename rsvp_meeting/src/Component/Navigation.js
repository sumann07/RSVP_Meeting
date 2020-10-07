import React from 'react';
import {NavLink} from "react-router-dom";
import "../Css/register.css";

export default function Navigation() {
    return (
       <> 
       
       <div className="col col-10 mx-auto  mt-2 ml-10">
       <ul className="nav nav-pills nav-justified">
  <li className="nav-item">
    <NavLink to="/" className="nav-link  btn btn-outline-success" >Register</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to ="/search" className="nav-link btn btn-outline-success" >Search</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to ="/report"className="nav-link btn btn-outline-success" >Report</NavLink>
  </li>
 
</ul>
</div>
       </>
    )
}
