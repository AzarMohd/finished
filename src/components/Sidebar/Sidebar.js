import React from 'react';
import { Card } from 'react-bootstrap';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleRight, faIndustry, faSearchPlus, faShippingFast, faWarehouse } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    

    return (
        <div>
            <Card className="bg-dark text-white" style={{ width: '17rem',height:"53rem" }}>
                <Card.Header className="head"><Card.Img variant="top" src="assets/images/ori-logistics-ori.png" style={{width:"100px",height:"50px",marginLeft:"60px",marginTop:"10px"}} />
                <FontAwesomeIcon style={{marginLeft:"50px",color:"#66ccff"}} icon={faAngleDoubleLeft} />
                </Card.Header>
                <Card.Body className='info'>
                <Card.Title className="item" style={{fontSize:"10px"}}><FontAwesomeIcon className="text-primary icon" icon={faIndustry}  /> <span className='name'>Production </span>
                    <FontAwesomeIcon className="icons" style={{fontSize:"15px"}}icon={faAngleRight} /></Card.Title>
                <Card.Title className="item" style={{fontSize:"10px"}}><FontAwesomeIcon className="text-primary icon" icon={faWarehouse}  /><span className='name'>Warhouse Management </span> 
                    <FontAwesomeIcon className="icons" style={{fontSize:"15px"}} icon={faAngleRight} /></Card.Title>
                
                <Card.Title className="item" style={{fontSize:"10px"}}><FontAwesomeIcon className="text-primary icon" icon={faShippingFast} /> <span className='name'>Shipping</span>
                    <FontAwesomeIcon className="icons" style={{fontSize:"15px"}} icon={faAngleRight} /></Card.Title>
                
                <Card.Title className="item" style={{fontSize:"10px"}}><FontAwesomeIcon className="text-primary icon" icon={faSearchPlus}  /> <span className='name'>Quality Managament</span>
                    <FontAwesomeIcon className="icons" style={{fontSize:"15px"}} icon={faAngleRight}  /></Card.Title>
                    </Card.Body>
            </Card>
        </div>
    )
}

export default Sidebar