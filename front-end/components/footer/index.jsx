function Footer() {
  return (
    <div className="container-fluid footer pt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <div className="container-fluid pt-5">
            <div className="row d-flex justify-content-between">
              <div className="col-6">
                <img
                  src="/brand-sunhair-removebg-preview.png"
                  alt=""
                  className=" w-25"
                ></img>
                <img
                  src="/slogan-removebg-preview.png"
                  alt=""
                  className="d-block w-25 mt-4"
                ></img>
                <p className="des ps-2 mt-4">
                  Sun Hair was founded with the goal of providing ladies all
                  over the world with the most beautiful, fashionable hair
                  without causing damage to their natural hair. Sun Hair is
                  proud to be one of Vietnam's leading hair suppliers
                </p>
                <div className="mt-5">
                  <img src="/whatsapp.png" className="icon ps-2 me-3" />
                  <span className="icon"> https://wa.me/84912124125</span>
                </div>

                <div className="mt-5">
                  <img src="/phone.png" className="icon ps-2 me-3 " />
                  <span className="icon "> (+84) 969-682-226 </span>
                </div>

                <div className="mt-5">
                  <img src="/mail.png" className="icon ps-2 me-3" />
                  <span className="icon mt-4"> Sunhaircompany@gmail.com</span>
                </div>

                <div className="mt-5">
                  <img src="/location.png" className="icon ps-2 me-3" />
                  <span className="icon mt-4">
                    Đông Bích, Đông Thọ, Yên Phong, Bắc Ninh Bac Ninh, Bắc Ninh
                    Province, Vietnam
                  </span>
                </div>
                <div className="copyright"> Copyright © 2022 SunhairCompany.com, All Rights Reserved </div>
              </div>
              <div className="col-1 mt-4">
                <p className="about mt-5">ABOUT</p>
                <div className="about-link">
                  <a className="about-link-item a" href="#">
                    About us
                  </a>
                  <a className="about-link-item mt-5" href="#">
                    Visson-Mission
                  </a>
                  <a className="about-link-item mt-5" href="#">
                    Blog
                  </a>
                  <a className="about-link-item mt-5" href="#">
                    Gallery
                  </a>
                </div>
              </div>
              <div className="col-2 mt-4">
                <p className="about mt-5">SUPPORT</p>
                <div className="about-link">
                  <a className="about-link-item a" href="#">
                    Contact Us
                  </a>
                  <a className="about-link-item mt-5" href="#">
                    Online chat
                  </a>
                  <a className="about-link-item mt-5" href="#">
                    Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
