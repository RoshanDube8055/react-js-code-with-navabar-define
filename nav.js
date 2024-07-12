import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  const size = {
    fontSize: '20px',
    color: 'white',
    display:'none',
     color:'orange',
    width:'100%',
  };

  return (
    <div className="nav"
      style={{
        background: '#f8f8f8',
        height: '40px',
        display: 'flex',
        width: '100%',
        marginTop: '-3px',
        alignItems: 'center', // Changed from 'right' to 'center'
        justifyContent: 'flex-end',
        paddingRight: '10px'
        
      }}
    
     >
      <nav style={{ display: 'inline-flex', gap: '10px',textTransform:'uppercase',marginRight:'14px'}}>
        <span style={size}>&#9776;</span>
        <div>
          <Link to='/' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Home</Link>
        </div>
        <div>
          <Link to='/about' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>About</Link>
        </div>
        <div>
          <Link to='/help' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Help</Link>
        </div>
        <div>
          <Link to='/change' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Gallry</Link>
        </div>
      </nav>
      {/* <span style={size}>&#9776;</span> */}

    </div>
  );
}

export default Nav;
