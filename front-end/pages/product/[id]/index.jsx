import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";
import Sponsor from '../../../components/sponsor';
import CartContext from '../../../context/cart'

const Categories = () => {
  const router = useRouter();
  const query = router.query;
  const product_id = query.id;
  const [showOption, setShowOption] = useState("characteristics");
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://sanh0804-sanh0804.vercel.app/product/${product_id}`)
      // .get(`https://localhost:5000/product/${product_id}`)
      .then((res) => {
        setProductData(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);


  /**ADDING PRODUCT TO CARD */
  const productAdded = useContext(CartContext);

  const handleAddToCart = ()=>{
    productAdded.setProductAdded(prev=>[...prev,{productData}]);
  }

  /**RESET CART */
  const handleResetCart=()=>{
    productAdded.setProductAdded([]);
  }

  if (isLoading) return <></>  
  else return (
    <ParallaxProvider>
      <Head>
        <title>{productData.name}</title>
      </Head>
      <div className="product-detail">

        <div className="container-fluid bg-white text-black text-center">
          <p style={{ fontSize: "11px" }} className="mb-1 mt-2">
            $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED HEBE TOTE
            BAG WITH PURCHASES $25
          </p>
        </div>

        <div className="container-fluid main">

          <div className="container pt-3 header">

            <div className="row align-items-center">
              <div className="col-3 offset-1 text-white pt-4">
                <span>&#8592; BACK TO CATEGORY </span>
              </div>
              <div className="col-4 text-center">
                <a className="navbar-brand" href="#">
                  <img
                    src="/brand-sunhair-removebg-preview.png"
                    alt=""
                    width="160"
                    height="57"
                  />
                </a>
              </div>
              <div className="col-4 text-end pt-3">
                <img
                  src="/shopping-cart-icon.png"
                  alt="" 
                  className="cart-icon"
                />
                <div className="d-inline-block">
                  <p className="numofadded">{productAdded.productAdded.length}</p>
                </div>
              </div>
            </div>
            
            <div className="row detail">

              <div className="col-11 col-lg-5 offset-1 detail__info pe-1">
                <Parallax
                  speed={-30}
                >
                  <div className="cate ps-2">{productData.category}</div>
                  <div className="name mt-4">{productData.name}</div>
                  <div className="info mt-5">{productData.information}</div>
                  <div className="color mt-5">Color <hr className="hr" /></div> 
                  <div className="buynow-addtocard mt-5">
                    <button className="addtocard w-75" onClick={()=>handleAddToCart()}>ADD TO CARD</button>
                    <button className="buynow w-75 mt-2" onClick={()=>handleResetCart()}>BUY NOW!</button>
                  </div>

                  <div className="description mt-5">
                    <div className="d-flex">
                      <h6 className={showOption==="characteristics"?"description-title-active me-5":"me-5"} onClick={() =>setShowOption("characteristics")}>
                        Characteristics
                      </h6>
                      <h6 className={showOption==="shipping"?"description-title-active":""} onClick={() =>setShowOption("shipping")}>
                        Shipping
                      </h6>
                    </div>
                    <div className="content mt-4">
                      {showOption==="characteristics" ? productData.characteristics : productData.howtobuy}
                    </div>
                  </div>

                </Parallax>
              </div>

              <Parallax speed={10} className=" col-lg-5 offset-1 detail__images overflow-auto text-center">
                <div className="detail__images-image" > 
                  {
                    Array.isArray(productData.avatar)?productData.avatar.map((src,index)=>
                    <>                
                      <img className="product-image img-fluid" src={src} alt="" id={index}/>
                    </>)
                    :<></>
                  }
                </div>
                {/* <div className="detail__images-miniimage ms-5" id ="list">
                  {
                    Array.isArray(productData.avatar)?productData.avatar.map((src,index)=>
                    <a href={"#"+index}>                
                      <img className="product-image-list" src={src} alt=""/>
                    </a>)
                    :<></>
                  }
                </div> */}
              </Parallax>

            </div>

            <Sponsor mainProduct={productData.category}/>
                
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Categories;
