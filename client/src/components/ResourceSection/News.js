import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardCustom from "../Card/CardCustom";

const News = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CardCustom
              title={
                "Lok Sabha passes Finance Bill; completes budgetary exercise for FY23"
              }
              summary={
                "The Budget 2022-23 raised Capex by 35.4 per cent to Rs 7.5 lakh crore to continue the public investment-led recovery of the pandemic battered economy."
              }
              src={
                "https://gumlet.assettype.com/bloombergquint%2F2020-03%2F74fdf38e-172e-48ff-bff7-2adb7c1a0376%2Ffm.jpg?rect=251%2C0%2C3089%2C2224&auto=format%2Ccompress"
              }
              btnText={"Read More"}
            />
          </Col>
          <Col>
            <CardCustom
              title={"Income Tax refunds worth Rs 1.93 lakh crore issued"}
              summary={
                "CBDT issues refunds of over Rs 1,93,720 crore to more than 2.26 crore taxpayers from April 1, 2021, to March 20, 2022,the I-T department tweeted."
              }
              src={
                "https://images.thequint.com/thequint%2F2022-03%2Fececdf13-9b4d-449c-9276-4ef88d68cae5%2Fdownload.jpeg?rect=0%2C0%2C1200%2C675&auto=format%2Ccompress&fmt=webp"
              }
              btnText={"Read More"}
            />
          </Col>
          <Col>
            <CardCustom
              title={"Disastrous to revert to old pension scheme: SBI research"}
              summary={
                "Recently, state governments of Rajasthan and Chhattisgarh have reverted to the old pension scheme where current revenues fund pension benefits."
              }
              src={
                "https://digitalmoneytimes.com/wp-content/uploads/2018/05/shutterstock_1058728253.jpg"
              }
              btnText={"Read More"}
            />
          </Col>
          <Col>
            <CardCustom
              title={
                "More pain for microfinance: Sticky loans beyond 180 days swell to Rs 24,500 crore"
              }
              summary={
                "Three months ago, the aggregate size of sticky loans was estimated at Rs 20,000 crore or about 8% of the microfinance book."
              }
              src={
                "https://tse1.mm.bing.net/th?id=OIP.VF0qW0FvFyR9wepvyhjNBQHaE8&pid=Api&P=0&w=260&h=173"
              }
              btnText={"Read More"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default News;
