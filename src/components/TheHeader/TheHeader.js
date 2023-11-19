import './TheHeader.scss';
import { useState } from 'react';
import iconHamburger from '@/assets/images/icon_hamburger.svg';

function TheHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 768);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  return (
    <header className='header'>
      <a href='/' className='header__logo'>
        <img src={require('@/assets/images/Logo.svg').default} alt='logo' />
      </a>
      <img src={iconHamburger} alt='Open menu' className='header__hamburger' onClick={openMenu}/>
      {isMenuOpen && <button title='close' className='header__close-btn' onClick={closeMenu}>X</button>}
      <nav>
        {isMenuOpen && (
          <ul className='header__navigation'>
            <li>
              <a href='/' className='header__navigation-link'>Home</a>
            </li>
            <li>
              <a href='/' className='header__navigation-link'>About</a>
            </li>
            <li>
              <a href='/' className='header__navigation-link'>Menu</a>
            </li>
            <li>
              <a href='/' className='header__navigation-link'>Reservations</a>
            </li>
            <li>
              <a href='/' className='header__navigation-link'>ORDER ONLINE</a>
            </li>
            <li>
              <a href='/' className='header__navigation-link'>LOGIN</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default TheHeader;