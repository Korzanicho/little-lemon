import './TheHeader.scss';

function TheHeader() {
  return (
    <header className='header'>
      <a href='/' className='header__logo'>
        <img src={require('@/assets/images/Logo.svg').default} alt='logo' />
      </a>
      <nav>
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
      </nav>
    </header>
  );
}

export default TheHeader;