// add class dropdown-callout-trapezoid" to display overlayed trapezoid shape on dropdown-callouts
import Image from 'next/image';

function DesktopDropdownItem (){

   return (
      <div className="container-fluid desktop-dropdown-item ">
         <div className="row justify-content-center  mt-4 ">
            <div className="col-1 d-flex flex-column mt-4 ms-5 border-end">
               <p>Best seller</p>
               <a href="#">Weft hair</a>
               <a href="#">Bulk hair</a>
               <a href="#">Keration</a>
               <a href="#">See All</a>
            </div>
            <div className="col-2 d-flex flex-column mt-4 ms-5">
               <p>Weft hair</p>
               <a href="#">Bulk hair</a>
               <a href="#">Keration</a>
               <a href="#">Closure</a>
            </div>
            <div className="col-2 d-flex flex-column mt-4 ms-5 ">
               <p>Bulk hair</p>
               <a href="#">Bright color</a>
               <a href="#">Curly color</a>
               <a href="#">Virgin color</a>
            </div>
            <div className="col-1 d-flex flex-column mt-4 ms-5 ">
               <p>Keration</p>
               <a href="#">Color Keratin</a>
               <a href="#">Virgin Straight Keratin</a>
            </div>
               {/* <div className="col-2">
                  { <Image  
                     alt="ss"
                     src='/desktop-dropdown-item.png'
                     width={120}
                     height={120}
                  /> }
                  <a href="#">See All</a>
               </div> */}

         </div>
      </div>
   )
}

export default DesktopDropdownItem