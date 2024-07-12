import React from 'react';
import Image from './jungle2.jpg';
import Lion from './lion image.jpg';
import Tiger from './tiger image.jpg';
import Elephant from './elephant image.jpg';
import Hippo from './hippo image.jpg';
import Panda from './panda image.jpg';
import Raino from './raino image.jpg';
import Nature from './nature2.jpg';
import Kangaroo from './kangaroo image.jpg';
import { FaYoutube, FaMapMarkerAlt,FaInstagram } from 'react-icons/fa';
import './style.css';

function About() {
  const bgcolor = {
    backgroundColor: 'black',
    // opacity:0.5,
    width: '100%',
    height: '100vh',
    marginTop: '-22px',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // borderBottomRightRadius: '30px',
    // borderBottomLeftRadius: '30px',
  };

  const section2 = {
    height: '70vh',
    width: '100%',
    backgroundColor: '#f8f8f8',
  };

  const footer = {
    height: '50vh',
    width: '100%',
    backgroundColor: '#0B0B21',
  };

  const imageclick = (event) => {
    event.target.style.backgroundColor = 'white';
  };

  return (
    <>
      <div style={bgcolor}>
        <h1 style={{ color: 'white', fontStyle: 'italic', paddingLeft: '20px' }}>
           PROVOIDING<br/><span style={{fontStyle:'italic',fontFamily:'cursive'}}>infoarmation about torisum point in<br/></span>INDIA
        </h1>
        {/* <img
          src={Lion}
          className="image"
          style={{
            marginTop: '200px',
            marginLeft: '20px',
            border: '1px solid white',
            borderRadius: '20px',
            border: '10px',
          }}
          alt="Lion"
        />
        <img
          src={Tiger}
          className="image"
          style={{
            borderRadius: '20px',
            marginTop: '200px',
            paddingTop: '10px',
            gap: '10px',
            paddingLeft: '10px',
          }}
          alt="Tiger"
        />
        <img
          src={Elephant}
          className="image"
          style={{ borderRadius: '20px', paddingLeft: '10px' }}
          onClick={imageclick}
          alt="Elephant"
        />
        <img
          src={Hippo}
          className="image"
          style={{
            height: '200px',
            width: '200px',
            padding: '10px',
            borderRadius: '20px',
          }}
          alt="Hippo"
        /> */}
      </div>

      <div style={section2}>
        &nbsp; &nbsp; &nbsp;
        <div
          className="imgeffect"
          style={{
            height: '300px',
            width: '200px',
            background: 'white',
            marginLeft: '50px',
            borderRadius: '20px',
            float: 'left',
            marginTop: '20px',
            marginRight: '10px',
            boxShadow: '0px 0px,2px 2px gray',
          }}
        >
          <img
            src={Panda}
            style={{ height: '200px', width: '150px', padding: '20px', borderRadius: '20px' }}
            alt="Panda"
          />
          <p style={{ fontFamily: 'sans-serif', fontSize: '12px', paddingLeft: '10px' }}>
            This is a beautiful panda image
            {/* <FaMapMarkerAlt style={{ color: 'black' }} /> */}
               <p style={{fontStyle:'italic',fontWeight:'bold',marginLeft:'20px'}}>WEST BANGAL</p>
               {/* <FaMapMarkerAlt style={{ color: 'black' }} /> */}
          </p>
          <div style={{marginTop:'-30px',marginLeft:'140px'}}>
          <FaMapMarkerAlt style={{ color: 'black' }} />
          </div>

        </div>
        <div
          className="imgeffect"
          style={{
            height: '300px',
            width: '200px',
            background: 'white',
            marginLeft: '50px',
            borderRadius: '20px',
            float: 'left',
            marginTop: '20px',
            marginRight: '10px',
            boxShadow: '0px 0px,2px 2px gray',
          }}
        >
          <img src={Raino}style={{ height: '200px', width: '150px', padding: '20px', borderRadius: '20px' }}alt="Rhino" />
          <p style={{ fontFamily: 'san-serif', fontSize: '12px', paddingLeft: '10px' }}>
            This is a beautiful rhino image
            <p style={{paddingLeft:'30px',fontWeight:'bold',fontStyle:'italic',fontSize:'15px'}}>KERALA</p>
            <div style={{marginTop:'-30px',marginLeft:'140px'}}>
            <FaMapMarkerAlt style={{ color: 'black' }} />

            </div>
          </p>
        </div>
        <div
          className="imgeffect"
          style={{
            height: '300px',
            width: '200px',
            background: 'white',
            marginLeft: '50px',
            borderRadius: '20px',
            float: 'left',
            marginTop: '20px',
            marginRight: '10px',
            boxShadow: '0px 0px,2px 2px gray',
          }}
        >
          <img
            src={Nature}
            style={{ height: '200px', width: '150px', padding: '20px', borderRadius: '20px' }}
            alt="Nature"
          />
          <p style={{ fontFamily: 'san-serif', fontSize: '12px', paddingLeft: '10px' }}>
            This is a beautiful nature image
               <p style={{paddingLeft:'30px',fontWeight:'bold',fontStyle:'italic',fontSize:'15px'}}>HIMACHAL</p>
               <div  style={{marginTop:'-30px',marginLeft:'150px'}}>
               <FaMapMarkerAlt style={{ color: 'black' }} />

               </div>
          </p>
        </div>
        <div
          className="imgeffect"
          style={{
            height: '300px',
            width: '200px',
            background: 'white',
            marginLeft: '50px',
            borderRadius: '20px',
            float: 'left',
            marginTop: '20px',
            marginRight: '10px',
            boxShadow: '0px 0px,2px 2px gray',
          }}
        >
          <img
            src={Kangaroo}
            style={{ height: '200px', width: '150px', padding: '20px', borderRadius: '20px' }}
            alt="Kangaroo"
          />
          <p style={{ fontFamily: 'san-serif', fontSize: '12px', paddingLeft: '10px' }}>
            This is a kangaroo image
            <p style={{paddingLeft:'30px',fontWeight:'bold',fontStyle:'italic',fontSize:'15px'}}>AFRICA</p>
            <div style={{marginTop:'-30px',marginLeft:'150px'}}>
            <FaMapMarkerAlt style={{ color: 'black' }} />
                
            </div>
          </p>
        </div>
      </div>
      <footer>
        <div style={footer}>
          <div>
            <h4 style={{color:'white',fontStyle:'italic',fontFamily:'cursive'}}>INFORMATION ABOUT THE WBESITE</h4>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;


