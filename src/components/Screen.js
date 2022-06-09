import React from 'react';
import "./Screen.css";
import Login from './Login';


function Screen() {
    return (
        
        <div className='container-fluid main'>
            <img src="assets/images/white_logo.png" class="rounded float-start" alt="..." width="200px" height="100px"></img>
            <img src="assets/images/ori-logistics.png" class="rounded float-end" alt="..."></img>
            <Login />
            <img src="assets/images/left_glass_new.png" class="d-block ms-auto img-responsive" alt="..." style={{marginTop:"385px",transform:"rotateY(180deg)",background:"transparent"}}></img>
        </div>
        
    )
}

export default Screen;