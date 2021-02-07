import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const today = new Date();
  return (
    <div className='footer'>
      <div className='upperFooter'>
        <div className='info'>
          <h2>horizon dev co.</h2>
          <div className='infoText'>
            <p>for programming solutions</p>
            <p>
              we have an experianced staff that will be with you along the way
              till you got what you need
            </p>
          </div>
        </div>
        <div className='sections'>
          <h2>Sections</h2>
          <div className='sectionsLinks'>
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
          </div>
        </div>
        <div className='links'>
          <h2>follow us</h2>
          <div className='linksIcons'>
            <a href='1'>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href='2'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='3'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
      <div className='lowerFooter'>
        <p>done by mohammed q kareem</p>
        <p>all right reserved {today.getFullYear()} &copy;</p>
      </div>
    </div>
  );
};

export default Footer;
