import { faCancel, faSearch, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Accordion } from "react-bootstrap";
import { Button, Stack, Form } from "react-bootstrap";
import "./Main.css";




function Main() {
  return (
    <div>
      <Accordion  flush>
        <Accordion.Item eventKey="0" style={{border:"none",boxShadow:"none",outline:"none",backgroundColor:"none"}}>
          <Accordion.Header ><FontAwesomeIcon icon={faSquareArrowUpRight} />
            <span className='ms-auto '><i class="fa fa-database"></i>  Production Plan </span>
          </Accordion.Header>
          <Accordion.Body >
            <Stack style={{overflow:"auto"}}  direction='horizontal' gap={3} className='d-flex flex-direction-column align-items-left'>
              
                <Form.Group >
                  <Form.Label style={{ marginLeft:"10px",fontSize: "10px", textAlign: "left" }}>Line
                    <Form.Control className='ms-auto'style={{ fontSize: "12px",boxShadow:"none", border: "none", outline: "none", borderBottom: "0.5px solid #0099ff", borderRadius: "0px" }} type="search" />
                  </Form.Label>
                </Form.Group>
                <Form.Group >
                  <Form.Label style={{ fontSize: "10px", textAlign: "left" }}>Enter a Date Range
                    <Form.Control  style={{ fontSize: "12px", border: "none",boxShadow:"none", outline: "none", width:"300px",borderBottom: "0.5px solid #0099ff", borderRadius: "0px" }} placeholder='dd/mm/yyyy-dd/mm/yyyy' type="text" >
                    </Form.Control>
                  </Form.Label>
                </Form.Group>
                <Form.Group >
                  <Form.Label style={{ fontSize: "10px", textAlign: "left" }}>status
                    <Form.Control className='ms-auto' style={{ fontSize: "12px",boxShadow:"none", border: "none", outline: "none", borderBottom: "0.5px solid #0099ff", borderRadius: "0px" }} type="search" />
                  </Form.Label>
                </Form.Group>
                <Button  variant="primary">
                  <FontAwesomeIcon icon={faSearch} /> Search
                </Button>
                <Button variant="danger " >
                  <FontAwesomeIcon icon={faCancel} /> Clear
                </Button>
              
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


    </div>
  )
}

export default Main