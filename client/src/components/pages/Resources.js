import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SidebarR from "../ResourceSection/SideBarR/SideBarR";
import classes from "../pages/CommunityPage.module.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Courses from "../ResourceSection/Courses";
import Blogs from "../ResourceSection/Blogs";
import News from "../ResourceSection/News";

const Resources = () => {
  return (
    <div className={classes.div}>
      <Row>
        <Col lg={2} md={2} xs={3} className={classes.nopadding}>
          <SidebarR />
        </Col>
        <Col className={classes.nopadding}>
          <Routes>
            <Route path="" element={<News />} />
            <Route path="courses" element={<Courses />} />
            <Route path="blogs" element={<Blogs />} />
          </Routes>
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Resources;

{
  /* <CardCustom
            title={"Bear vs Bull"}
            summary={"Learn about what is Bull market and Bear market"}
            src={require("../pictures/1.jpg")}
          ></CardCustom>
        </Col>
        <Col>
          <CardCustom
            title={"Bear vs Bull"}
            summary={"Learn about what is Bull market and Bear market"}
            src={require("../pictures/1.jpg")}
          ></CardCustom> */
}
