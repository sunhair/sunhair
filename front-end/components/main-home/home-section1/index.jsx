// import Header from "../../header";
import Header from "../../header/index";

function HomeSection1() {
  return (
    <div className="container-fluid homesection1">
      <Header />
      <div className="container homepage">
        <div className="row align-item-center">
          <div className="col-7">
            <p className="slogan">YOUR BEAUTY OUR MISSION</p>
            <p className="description">
              We provide ladies all over the world with the most beautiful,{" "}
              <br />
              fashionable hair without causing damage to their natural hair.
            </p>
            <div className="time-available">
              <div className="text">
                <p>Open</p>
                <p>08:00 AM</p>
              </div>

              <div className="hr"></div>

              <div className="text">
                <p>Close</p>
                <p>21:30 PM</p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="image-wrapper shine">
              <img
                src="/background-homepage-removebg-preview.png"
                alt="Image here, hover me and watch me shine!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
