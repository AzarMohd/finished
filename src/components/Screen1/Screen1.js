import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Container, Row, Col, ThemeProvider } from 'react-bootstrap';
import Cards from '../Card/Cards';
import Small from '../Small/Small';


const Screen1 = () => {
  return (
    <div className='box'>
      <ThemeProvider breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}>
        <Sidebar />
        <Container fluid>

          <Col xs={10} style={{ position: "absolute", top: "0px", left: "275px" }}>
            <Row><Header /></Row>
            <Row><Small /></Row>
            <Row><Main /></Row>
            <Row><Cards /></Row>
          </Col>

        </Container>
      </ThemeProvider>
      
    </div>
  )
}

export default Screen1