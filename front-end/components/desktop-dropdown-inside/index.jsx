// add class dropdown-callout-trapezoid" to display overlayed trapezoid shape on dropdown-callouts
import {Container, Row, Col, Card} from 'react-bootstrap'

function DesktopDropdownInside (){

   return (
      <Container fluid className="desktop-dropdown-inside ">        
         <Row>
            <Col sm className="card-intro-1">
               <a href="#a" title="" className="card-title">MEANING <br/> NAME</a>
            </Col>
            <Col sm className="card-intro-2">
               <a href="#a" className="card-title">WHY YOU <br/> SHOULD CHOOSE</a>            
            </Col>
            <Col sm className="card-intro-3">
               <a href="#a" className="card-title">VISION <br/> AND MISSION</a>
            </Col>
            <Col sm className="card-intro-4">
               <a href="#a" className="card-title">SHOP</a>            
            </Col>
            <Col sm className="card-intro-5">
               <a href="#a" className="card-title">FEEDBACK</a>     
            </Col>
         </Row>
      </Container>
   )
}

export default DesktopDropdownInside