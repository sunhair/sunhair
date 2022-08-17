function Feedback() {
  return (
    <div className="feedback">
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <div className="col-4">
            <div className="hr"></div>
          </div>
          <div className="col-8 text-end">
            <p className="title">WHAT A CUSTOMERS </p>
          </div>
        </div>
      </div>
      <p className="title text-end a">SAYING? </p>

      <div className="container-fluid">
        <div className="row mt-5 justify-content-around">
          <div className="col-3 text-center">
            <img src="/feedback1.png" alt="" />
          </div>
          <div className="col-3 text-center">
            <img src="/feedback2.png" alt="" />
          </div>
          <div className="col-3 text-center">
            <img src="/feedback3.png" alt="" />
          </div>
        </div>

        <div className="space">
        </div>
      </div>
    </div>
  );
}

export default Feedback;
