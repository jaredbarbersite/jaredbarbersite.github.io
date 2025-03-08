import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-scroll';
import {Link as BookLink} from 'react-router-dom';
import Image from '../elements/Image';

const logo = require('../../logo.png')

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link to="gallery" spy={true} smooth={true} style={{color: '#454545', cursor: 'pointer'}}>Gallery</Link>
                    </li>
                  </ul>
                  <ul className={
                    classNames(
                      'list-reset text',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link to="about" spy={true} smooth={true} style={{color: '#454545', cursor: 'pointer'}}>About me</Link>
                    </li>
                  </ul>
                  <ul className={
                    classNames(
                      'list-reset text',
                      navPosition && `header-nav-${navPosition}`
                      )}>
                    
                    <Image src={logo}  
                      width={100}
                      height={39} />
                  </ul>
                  <ul className={
                    classNames(
                      'list-reset text',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link to="services" spy={true} smooth={true} style={{color: '#454545', cursor: 'pointer'}}>Services</Link>
                    </li>
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav"
                    >
                      <li>
                        <BookLink to="/booking" className="button button-wide-mobile button-sm" 
                          style={{
                            color: 'white',
                            backgroundColor: '#454545',
                            padding: '6px 10px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold'
                          }}
                        >Book now</BookLink>
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
