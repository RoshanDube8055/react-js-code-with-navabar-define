import React from 'react'
import Image from './sunset.jpg';
import bear from './bear iamge.jpg';
function help() {
  const bgcolor={
    backgroundColor:'orange',
    width:'100%',
    height:'100vh',
    marginTop:'-22px',
    backgroundImage:`url(${Image})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
  }
  const div1={
    height:'100vh',
    width:'100%',
    backgroundColor:'wheat',
  }
  const card1={
    height:'200px',
    width:'200px',
    position:'absolue',
    backgroundColor:'white',
    borderRadius:'20px',
    padding:'20px',
  }
  const bearImg={
    paddingRight:'-20px',
    height:'200px',
    width:'200px',
  }
  return (
    <>
    <div style={bgcolor}>
       <h1 style={{color:'white',marginTop:'20px'}}>This is the help section</h1>
    </div>
    <hr style={{border:'3px solid black'}}/>
    <div style={div1}>
      &nbsp;
       <div style={card1}>
           <img src={bear}style={bearImg}/> 
              <p style={{marginTop:'-8px',color:'coral'}}>This is the bear iamge</p>
       </div>
    </div>
    </>

  )
}

export default help
