import './TheHeader.scss';

function TheHeader() {
  return (
    <header className='header'>
      <img src={require('@/assets/images/Logo.svg').default} alt='logo' />
      <nav>
        <ul className='header__navigation'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Menu</a>
          </li>
          <li>
            <a href='/'>Reservations</a>
          </li>
          <li>
            <a href='/'>ORDER ONLINE</a>
          </li>
          <li>
            <a href='/'>LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TheHeader;