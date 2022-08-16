function Header() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div className='container'>
        <a class="navbar-brand" href="#">
          <img src="/brand-sunhair-removebg-preview.png" alt="" width="160" height="57"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between align-items-end" id="navbarNavAltMarkup" >
          <div className='section1'></div>

          <div class="navbar-nav section2">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">About us</a>
            <a class="nav-link" href="#">Shop</a>
          </div>

          <div class="navbar-nav section3">
            <img src='/icon-contact.png' alt="" width="18" heigh="18"/>
            <a class="nav-link" href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Header;
