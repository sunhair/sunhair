function Subcribe() {
  return (
    <div className="container-fluid subcribe">
      <div className="row justify-content-center">
        <div className="col-10 d-flex flex-column justify-content-center">
          <div className="container-fluid">
            <div className="row d-flex justify-content-around align-items-center">
              <div className="col-6 des">
                <p className="title">SUBCRIBE OUR NEWSLETTER </p>
                <p>
                  Be the first one to know about discounts, offers and events
                </p>
              </div>
              <div className="col-6 form">
                <div className="regular d-flex justify-content-between align-items-center">
                  <input
                    className="form-regular"
                    type="input"
                    placeholder="Your email here ..."
                  />
            <button type="button" className="submit-regular">
              <p className="text">Regular</p>
            </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subcribe;
