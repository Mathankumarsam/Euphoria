import React from "react";
import styled from "styled-components";

import img1 from "../assets/images/bg-4.jpg";
import img2 from "../assets/images/bg-5.jpg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  margin: 100px auto 0;

  div {
  }
`;

const ImageDiv1 = styled.div`
  width: 50%;
  height: 639px;
  background-image: url(${img1});
  background-size: cover;
  border-bottom-left-radius: 14px;

  div {
    color: white;
    text-align: start;
    position: relative;
    top: 180px;
    left: 60px;
  }
`;

// Heading style (h1)
const Heading = styled.h1`
  width: 466px;
  font-size: 34px;
  font-weight: 800;
`;

const Paragraph = styled.p`
  width: 451px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.6;
  margin-top: 25px;
`;

const Links = styled.button`
  font-size: 18px;
  margin-top: 25px;
  padding: 12px 44px ;
  background-color: #fff;
  border-radius: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

const ImageDiv2 = styled.div`
  width: 50%;
  height: 639px;
  background-image: url(${img2});
  background-size: cover;
  border-bottom-right-radius: 14px;
`;

const App = () => (
  <Section>
    <ImageContainer>
      <ImageDiv1>
        <div>
          <Heading>WE MADE YOUR EVERYDAY FASHION BETTER!</Heading>
          <Paragraph>
            In our journey to improve everyday fashion, euphoria presents
            EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </Paragraph>
          <Links to="">Shop Now</Links>
        </div>
      </ImageDiv1>
      <ImageDiv2 />
    </ImageContainer>
  </Section>
);

export default App;
