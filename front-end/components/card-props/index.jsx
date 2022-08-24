import Loading from "../loader";

function CardProps({ props, isLoading }) {
  if (isLoading) return <Loading />;
  else return (
    <>
      {props.map((prop) => (
        <div
          className="container-card mb-5"
          style={{ backgroundImage: `url(${prop.avatar})` }}
        >
          <div className="overlay">
            <div className="items"></div>
            <div className="items head">
              <p>{prop.name}</p>
              <hr />
            </div>
            <div className="items price">
              {/* <p className="old">$699</p> */}
              <p className="new">{prop.category}</p>
            </div>
            <div className="items cart">
              <i className="fa fa-shopping-cart"></i>
              <span>ADD TO CART</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardProps;
