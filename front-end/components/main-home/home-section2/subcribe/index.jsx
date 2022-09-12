import { useState, useEffect } from "react";
import axios from "axios";

function Subcribe() {
  const [email, setEmail] = useState("");
  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = () =>{
    const data={
      email : email,
      phone: "",
      time_register: new Date(),
      cart: new Array({})
    }
    axios.post(`http://localhost:5000/user`, {data})
      .then(res=>{
        console.log(res.data);
      })
      .catch((error) => console.log(error))
  }
  
  return (
    <div className="container-fluid subcribe">
      <div className="container">
        <div className="col-10 offset-1">
          <div className="subcribe-frame d-flex justify-content-around align-items-center">
            <div className="des">
              <p className="title">
                SUBCRIBE OUR <br /> NEWSLETTER{" "}
              </p>
              <p>Be the first one to know about discounts, offers and events</p>
            </div>
            <div className="form">
              <div className="regular d-flex justify-content-between align-items-center">
                <input
                  className="form-regular"
                  type="input"
                  placeholder="Your email here ..."
                  onChange={(e)=>handleOnChange(e)}
                />
                <button type="button" className="submit-regular" onClick={()=>handleSubmit()}>
                  <p className="text">Regular</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subcribe;
