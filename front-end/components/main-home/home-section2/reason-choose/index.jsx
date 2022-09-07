import { AnimationOnScroll } from "react-animation-on-scroll";

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
          <AnimationOnScroll animateIn="animate__fadeInDownBig" className="reason1 d-flex flex-column align-items-center justify-content-center">
            <p className="content-title reason1-title">
              DIRECT <br /> WHOLESALE <br /> FACTORY
            </p>
            <p className="content-description reason1-description">
              We are direct wholesale <br /> manufactures with the best price
            </p>
            <button type="button" className="button-explore">
              <p className="text">Learn more</p>
            </button>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInLeftBig" className="reason5 d-flex flex-column justify-content-center ps-5">
            <p className="content-title mt-3">
              BEST PRICE <br /> HIGH QUALITY
            </p>
            <p className="content-description mt-2">
              Sun Hair Company supplies high-quality <br /> 100% human hair at
              wholesale factory price.
            </p>
            <button type="button" className="button-explore mt-3">
              <p className="text">Learn more</p>
            </button>
          </AnimationOnScroll>
        </div>

        <div className="col-auto">
          <div className="container-fluid">
            <div className="row">
              <AnimationOnScroll animateIn="animate__fadeInRightBig" className="col-12 reason2 d-flex flex-column justify-content-center align-items-end text-end pe-5">
                <p className="content-title reason2-title mt-3">
                  BEST PRICE <br /> HIGH QUALITY
                </p>
                <p className="content-description reason2-description mt-2">
                  Sun Hair Company supplies high-quality <br /> 100% human hair
                  at wholesale factory price.
                </p>
                <button type="button" className="button-explore mt-3">
                  <p className="text">Learn more</p>
                </button>
              </AnimationOnScroll>
            </div>
            <div className="row justify-content-between mt-3">
              <AnimationOnScroll animateIn="animate__fadeIn" className="col-auto reason3 d-flex flex-column justify-content-between">
                <div className="ps-4 pt-5">
                  <p className="content-title reason3-title">EASY BUY ONLINE</p>
                  <p className="content-description reason3-description">
                    Payment online thou Western Union/ <br />
                    Moneygram/Bank Online Transfer
                  </p>
                  <a href="#">Learn more</a>
                </div>
                <div className="text-end mb-5 me-4">
                  <p className="content-title reason3-title">BEST SUPPLIER</p>
                  <p className="content-description reason3-description">
                    Sun Hair is a loyal vendor of big hair sellers: in Russia,{" "}
                    <br /> Nigeria, Cameroon, the US, the UK, and China,...
                  </p>
                  <a href="#">Learn more</a>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeInUpBig" className="col-auto reason4 d-flex flex-column align-items-center ">
                <p className="content-title reason4-title ps-5">
                  ASSURANCE EXCHANGE POLICY
                </p>
                <p className="content-description reason4-description">
                  100% exchange policy for customers <br />
                  if the fault is from the manufacturer
                </p>
                <button type="button" className="button-explore">
                  <p className="text">Learn more</p>
                </button>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReasonChoose;
