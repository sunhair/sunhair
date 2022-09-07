import { useState, useEffect } from "react";
import axios from "axios";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Sponsor({ mainProduct }) {
  const [relativeProduct, setRelativeProduct] = useState([]);

  useEffect(() => {  
    // setIsLoading(true);
    axios
      .get(`http://localhost:5000/product/category/${mainProduct}`)
      .then((res) => {
        setRelativeProduct(res.data);
      })
      .catch((error) => console.log(error));
    // .finally(() => setIsLoading(false));
  }, []);

  console.log(relativeProduct);
  return (
    <>
      <div className="row mb-5 d-flex justify-content-center sponsor-text">
        <div className="col-10 mt-5">
          <AnimationOnScroll animateIn="animate__slideInRight">
            <p className="title text-white">You may also likeee</p>
          </AnimationOnScroll>
        </div>
      </div>

      <div className="col-12 col-md-10 offset-1">
        <div className="container-fluid">
          <AnimationOnScroll
            animateIn="animate__slideInRight"
            className="row sponsor d-flex flex-nowrap overflow-auto"
          >
            {relativeProduct.map((product, index) => (
              <div key={index} className="col-4 p-1">
                <img
                  src={product.avatar[0]}
                  alt="product"
                  className="d-inline-block product-image"
                />
              </div>
            ))} 
          </AnimationOnScroll>
        </div>
      </div>
    </>
  );
}

export default Sponsor;
