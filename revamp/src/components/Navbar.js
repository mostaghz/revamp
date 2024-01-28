import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';


 function Navbar() {
   // set state now (importing {useState} from above). change it from what it was to what we want
   const [click, setClick] = useState(false);

   //const [button, setButton] = useState(true);

   // sets the click and then reverse the false useState
   const handleClick = () => setClick(!click);

   const closeMobileMenu = () => setClick(false);

   //function that removes button on mobile and displays it approproatly depending on screens size
//    const showButton = () => {
//      if(window.innerWidth <= 960) {
//          setButton(false);
//      } else {
//          setButton(true);
//      }
//    };

   //window.addEventListener('resize');
//    window.addEventListener('resize', showButton);

   return (
     <>
       <nav className="navbar">
         <div className="navbar-container">
             {/* the site icon image. can be link or image. worry about later */}
             <a href="#header">AM</a>
             <div className='menu-icon' onClick={handleClick}>
                 {/* if the hamburger icon is clicked, it turns into an 'x'...*/}
                 <FontAwesomeIcon icon={click ? faTimes : faBars} />
             </div>
             {/* mostly for mobile view, clicking on the link closes the menu and goes to the page */}
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                 <a href="#header" className='nav-links' onClick={closeMobileMenu}>
                     Home</a>
               </li>
               <li className='nav-item'>
                 <a href="#about" className='nav-links' onClick={closeMobileMenu}>
                     About</a>
               </li>
               <li className='nav-item'>
                 <a href="#projects" className='nav-links' onClick={closeMobileMenu}>
                     Projects</a>
               </li>
               <li className='nav-item'>
                 <a href="#contact" className='nav-links' onClick={closeMobileMenu}>
                     Contact</a>
               </li>
             </ul>
             {/* {button && <Button buttonStyle='btn--outline'>Sign Up</Button>} */}
         </div>
       </nav>  
     </>
   )
}

export default Navbar;
