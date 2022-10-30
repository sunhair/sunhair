import Notification from "./notification";
import Link from "next/link";

function Header() {
  return (
    <>
      <Notification />
      <div className="container mt-4 header-product">
        <div className="row align-items-center">
          <div className="col-2 ps-4 pt-3">
            <Link href="/">GO HOME</Link>
          </div>

          <div className="col-8 text-center">
            <a className="navbar-brand" href="#">
              <img
                src="/brand-sunhair-removebg-preview.png"
                alt=""
                width="160"
                height="57"
              />
            </a>
          </div>
          <div className="col-2 text-end">
            <a className="nav-link d-inline-block" href="#">
              <img
                src="/search-interface-symbol-icon.png"
                alt=""
                className="search-icon"
              />
            </a>
            <a className="nav-link d-inline-block ms-5" href="#">
              <img
                src="/shopping-cart-icon.png"
                alt=""
                className="search-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
