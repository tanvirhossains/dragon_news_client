import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import { Col, Container, Row } from 'react-bootstrap';

import LeftSideNav from '../Shared/LeftSideNav';
import RightSideNav from '../Shared/RigthSideNav/RightSideNav';
// import RightSideNav from '../Shared/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                        {/* <Outlet/> */}
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            {/* <Outlet /> */}
        </div>
    );
};

export default Main;