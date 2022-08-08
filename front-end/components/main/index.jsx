import {Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

function Main(){
   return(
      <div className="container main ">
         <div className="row justify-content-around align-items-center text-image">
            <div className="col-md-4 offset-md-2 align-self-center d-flex">
               dddd
            </div>
            <div className="col-6  d-flex justify-content-center">
               <div class="image-wrapper shine">
                  <img src="/background-homepage-removebg-preview.png" alt="Image here, hover me and watch me shine!" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Main