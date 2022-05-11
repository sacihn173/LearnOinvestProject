import React from "react";
import CardCustom from "../Card/CardCustom";
import { Row, Col, Container } from "react-bootstrap";
const Courses = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CardCustom
            title={" Investing In Stocks The Complete Course! "}
            summary={
              "Master Stock Market Investing & Trading in the Stock Market. Top Instructor & Millionaire Investor. Investing & Trading"
            }
            src={
              "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-8t5hhoisq4hvqnlkrq5p1v3432-20200624173857.Medi.jpeg"
            }
            btnText={"Enroll Now"}
          />
        </Col>
        <Col>
          <CardCustom
            title={
              "Accounting & Financial Statement Analysis: Complete Training"
            }
            summary={
              "Accounting & Financial Ratio Analysis made easy. Learn important accounting skills that will get your foot in the door!"
            }
            src={"https://img-c.udemycdn.com/course/240x135/640100_9f85_5.jpg"}
            btnText={"Enroll Now"}
          />
        </Col>
        <Col>
          <CardCustom
            title={
              "Technical Analysis MasterClass:Trading By Technical Analysis"
            }
            summary={
              "Stock Market Technical Analysis Secrets for Forex , Stock Trading , Options , Swing Trading & Day Trading + ASSIGNMENTS"
            }
            src={
              "https://img-b.udemycdn.com/course/240x135/1255136_1bf6_14.jpg"
            }
            btnText={"Enroll Now"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
