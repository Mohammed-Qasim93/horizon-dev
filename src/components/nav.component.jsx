import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo' id='nav'>
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={500}
          delay={100}
          isDynamic={true}
          className='logo-link'>
          <img src={logo} alt='Logo' />
          <h3>Horizone Dev</h3>
        </Link>
      </div>
      <ul>
        <li>
          <Link
            className='navLink'
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            delay={100}
            isDynamic={true}>
            home
          </Link>
        </li>
        <li>
          <Link
            className='navLink'
            to='ourWork'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-70}
            duration={500}
            delay={100}
            isDynamic={true}>
            our work
          </Link>
        </li>
        <li>
          <Link
            className='navLink'
            to='about'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-70}
            duration={500}
            delay={100}
            isDynamic={true}>
            about
          </Link>
        </li>
        <li>
          <Link
            className='navLink'
            to='contact'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-70}
            duration={500}
            delay={100}
            isDynamic={true}>
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
