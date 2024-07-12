import React, { useEffect, useState } from 'react';
import Image from './tiger3.jpg';
import Elephant from './elephant image.jpg';
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';
import Hippo from './hippo image.jpg';
import Tiger from './tiger image.jpg';
import Lion from './lion image.jpg';
import Girgit from './girgit.jpeg';
import Squiral from './squiral.jpeg';
import Parrot from './parrot.jpeg';
import { FaYoutube, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter ,FaGithub} from 'react-icons/fa';

import './style.css';

function Home() {
  const [jsonData, setJsonData] = useState(null); // State to hold the fetched JSON data
  const [error, setError] = useState(null); // State to hold error messages

  const bgcolor = {
    // backgroundColor: 'gray',
    width: '100%',
    height: '100vh',
    marginTop: '-2px',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backdropFilter: 'blur(10px)',
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('./src/componants/MOCK_DATA (2).json');
  //       if (!response.ok) {
  //         throw new Error('Network issue occurred');
  //       }
  //       const data = await response.json();
  //       setJsonData(data); // Update state with fetched data
  //     } catch (error) {
  //       setError(error.message); // Update state with error message
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchData();
  // }, []); // Empty dependency array means this effect runs only once when the component mounts

  const div2 = {
    height: '80vh',
    width: '100%',
    backgroundColor: '#f8f8f8',
    backgroundSize: 'cover'
  };
  const desing = {
    marginTop: '20px',
    // border: '1px solid black',
    marginLeft: '50px',
    height: '200px',
    width: '300px'
  };
  const desing1 = {
    marginLeft: '50px',
    height: '200px',
    width: '200px'
  };
  const desing2 = {
    marginLeft: '50px',
    height: '200px',
    width: '200px'
  };
  const desing3 = {
    marginLeft: '30px',
    height: '200px',
    width: '170px'
  };
  const div3 = {
    marginTop: '5%',
    height: '60vh',
    width: '100%',
    backgroundColor: 'black'
  };
  const handleClick = () => {
    // console.log('Clicked the button');
    fetch('./src/componants/MOCK_DATA (2).json')
      .then(response => {
        if (!response.ok) {
          throw new Error('network issue...');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log('not reach any data from server', error);
      })
  };

  return (
    <>
      <div style={bgcolor} className='background'>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Nature website</h1>
        {jsonData ? (
          <div>
            {/* Render fetched JSON data */}
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
          </div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div style={{ color: 'white' }}>Visite here...</div>
        )}
      </div>
      <div style={div2}>
        <img src={Elephant} style={desing} className='desing' />
        <img src={Hippo} style={desing} className='desing' />
        <img src={Tiger} style={desing} className='desing' />
        <img src={Lion} style={desing} className='desing' />
        <img src={Girgit} style={desing1} className='desing' />
        <img src={Squiral} style={desing2} className='desing' />
        <img src={Parrot} style={desing3} className='desing' />
      </div>
      <div style={div3}>
        &nbsp;
        <h2 style={{ color: 'white', paddingLeft: '20px' }}>Explore</h2>
        <h5 style={{ color: 'white', paddingLeft: '20px', fontFamily: 'revert'}}>Get The More Info Using The Social Media</h5>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ color: 'gold', marginTop: '-20px', paddingLeft: '20px', height: '60px', width: '30px' }} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube style={{ color: 'gold', marginTop: '-20px', paddingLeft: '20px', height: '60px', width: '30px' }} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{ color: 'gold', marginTop: '-20px', paddingLeft: '20px', height: '60px', width: '30px' }} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={{ color: 'gold', marginTop: '-20px', paddingLeft: '20px', height: '60px', width: '30px' }} />
        </a>
        <a href='https://www.github.com/roshandube8055'><FaGithub style={{color:'gold',marginTop:'-20px',paddingLeft: '20px', height: '60px', width: '30px' }}/></a>
        {/* <h3 style={{color:'white'}}>This is a web</h3> */}
        <div style={{marginLeft:'800px'}}>
          <h6 style={{color:'white'}}>This website showing the infoarmation about a jungle</h6>

        </div>
        <hr/>
        <h6 style={{color:'gold',textAlign:'center',marginTop:'-0px'}}>2024 All Rights Reserved,Desing & Devloped By : Roshan Dube</h6>
        <h6 style={{color:'gold',textAlign:'center',marginTop:'-0px'}}>Gmail Id: roshandube58@gmail.com</h6>

      </div>
    </>
  );
}

export default Home;
