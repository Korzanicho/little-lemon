import './TheFooter.scss'

function TheFooter () {
  return (
    <footer className="the-footer">
      <div className="the-footer__inner d-flex justify-space-between">
        <div className="the-footer__menu-column">
          <h4 className="the-footer__menu-title">Doormat Navigation</h4>
          <ul className="the-footer__menu-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
        <div className="the-footer__menu-column">
          <h4 className="the-footer__menu-title">Contact</h4>
          <ul className="the-footer__menu-list">
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone number</a></li>
            <li><a href="#">email</a></li>
          </ul>
        </div>
        <div className="the-footer__menu-column">
          <h4 className="the-footer__menu-title">Social Media Links</h4>
          <ul className="the-footer__menu-list">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <p>Little Lemon© 2023</p>
    </footer>
  )
}

export default TheFooter