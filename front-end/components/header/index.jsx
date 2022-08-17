import Link from 'next/Link';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className='container'>
        <a className="navbar-brand" href="#">
          <img src="/brand-sunhair-removebg-preview.png" alt="" width="160" height="57"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between align-items-end" id="navbarNavAltMarkup" >
          <div className='section1'></div>

          <div className="navbar-nav section2">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">About us</a>
            <a className="nav-link" href="#">Shop</a>
          </div>

          <div className="navbar-nav section3">
            <img src='/icon-contact.png' alt="" width="18" heigh="18"/>
            <a className="nav-link" href="tel:(+84) 969-682-226">Contact</a>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Header;
