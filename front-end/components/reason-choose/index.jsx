function ReasonChoose() {
  return (
    <div className="container reason-choose">
      {/* Title */}
      <p className="title">WHY YOU </p>
      <div className="row align-items-center">
        <div className="col-7">
          <p className="title">SHOULD CHOOSE? </p>
        </div>
        <div className="col-5">
          <div className="hr"></div>
        </div>
      </div>

      {/* Content */}
      <div className="row content justify-content-around">
        <div className="col-auto ">

          <div className="reason1 d-flex flex-column align-items-center justify-content-center">
            <p className="content-title reason1-title">
              DIRECT <br /> WHOLESALE <br /> FACTORY
            </p>
            <p className="content-description reason1-description">
              We are direct wholesale <br /> manufactures with the best price
            </p>
            <button type="button" className="button-explore">
              <p className="text">Learn more</p>
            </button>
          </div>

          <div className="reason5">

          </div>

        </div>

        <div className="col-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 reason2 d-flex flex-column justify-content-center align-items-end text-end pe-5">
              <p className="content-title reason2-title mt-3">
                BEST PRICE <br /> HIGH QUALITY
              </p>
              <p className="content-description reason2-description mt-2">
                Sun Hair Company supplies high-quality <br /> 100% human hair at
                wholesale factory price.
              </p>
              <button type="button" className="button-explore mt-3">
                <p className="text">Learn more</p>
              </button>
              </div>
            </div>
            <div className="row justify-content-between mt-3">
              <div className="col-auto reason3">
                fsdfsdfsdfsdf
              </div>
              <div className="col-auto reason4">
                sidfjsdif
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReasonChoose;
