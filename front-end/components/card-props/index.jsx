import Loading from "../loader";
import Link from "next/Link";

function CardProps({ props, isLoading, handleChooseItems }) {
  if (isLoading) return <Loading />;
  else
    return (
      <>
        {props.map((prop, index) => (
          // const pathname = "product/" + prop.name;
          <Link
            href={{
              pathname: "/product/"+prop._id,
            }}
            key={index}
          >
            <div
              className="container-card mb-5"
              style={{ backgroundImage: `url(${prop.avatar[0]})` }}
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
          </Link>
        ))}
      </>
    );
}

export default CardProps;
