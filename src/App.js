import { useState } from 'react';
import './App.css'
import Clock from './Clock';
import Icons from './Icons';
import Nav from './Nav';
// import axios from 'axios';
import { motion } from 'framer-motion'
import { ReactComponent as CaretIcon } from './icons/careto.svg'
import Crypto from './Crypto';

function App() {
  const [navBar, setNavBar] = useState(false)
  
  return (
    <div className="App">
      <Crypto />
      <motion.button
        onClick={() => setNavBar(!navBar)} 
        className='navButton'
        initial={{backgroundColor: 'transparent'}}
        animate={{
          backgroundColor: navBar ? 'rgba(0, 0, 0, 0.9)' : 'transparent'
        }}
        >
          <motion.div
          initial={{filter: 'none'}}
          animate={{
            filter: navBar ? 'invert(41%) sepia(53%) saturate(5827%) hue-rotate(214deg) brightness(104%) contrast(101%)' : 'none'
          }}
          transition={{
            duration: 0.001
          }}
          >
          {<CaretIcon className='caret'/>}
          </motion.div>
        </motion.button>
      <Icons />
      <Clock />
      <Nav
      navBar={navBar}
      />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />