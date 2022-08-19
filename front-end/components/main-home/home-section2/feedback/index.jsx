function Feedback() {
  return (
    <div className="feedback">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-4 pt-3">
            <div className="hr mt-5"></div>
          </div>
          <div className="col-8 text-end">
            <p className="title">
              WHAT A CUSTOMERS <br /> SAYING{" "}
            </p>
          </div>
        </div>
      </div>
      {/* <p className="title text-end a">SAYING? </p> */}

      <div className="container-fluid">
        <div className="container">
          <div className="row mt-5 justify-content-around">
            <div className="col-4 text-center">
              <img src="/feedback1.png" alt="" />
            </div>
            <div className="col-4 text-center">
              <img src="/feedback2.png" alt="" />
            </div>
            <div className="col-4 text-center">
              <img src="/feedback3.png" alt="" />
            </div>
          </div>
        </div>

        <div className="space"></div>
      </div>
    </div>
  );
}

export default Feedback;
