import React from "react";
import CardCustom from "../Card/CardCustom";
import { Row, Col, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CardCustom
              title={"Nse vs Bse"}
              summary={
                "A stock exchange/market is a platform for the trading of securities like shares (Stock), and derivatives. A stock may be bought or sold only if it is listed on an exchange. Hence, it is a meeting place of the stock buyer and seller."
              }
              src={
                "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-picture-id1322201350"
              }
              btnText={"Read More"}
            />
          </Col>
          <Col>
            <CardCustom
              title={"Taxes"}
              summary={
                "Taxes are mandatory contributions levied on individuals or corporations by a government entity—whether local, regional, or national. Tax revenues finance government activities, including public works and services such as roads and schools, or programs such as Social Security and Medicare."
              }
              src={
                "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-picture-id1322201350"
              }
              btnText={"Read More"}
            />
          </Col>
          <Col>
            <CardCustom
              title={"Bear vs Bull Market"}
              summary={
                'In the investing world, the terms "bull" and "bear" are frequently used to refer to market conditions. These terms describe how stock markets are doing in general—that is, whether they are appreciating or depreciating in value.'
              }
              src={
                "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-picture-id1322201350"
              }
              btnText={"Read More"}
            />
          </Col>
          <Col>
            <CardCustom
              title={"Public Finance"}
              summary={
                "The main components of public finance include activities related to collecting revenue, making expenditures to support society, and implementing a financing strategy (such as issuing government debt)."
              }
              src={
                "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-picture-id1322201350"
              }
              btnText={"Read More"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
