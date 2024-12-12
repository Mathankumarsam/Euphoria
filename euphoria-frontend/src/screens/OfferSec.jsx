import React from "react";
import styled from "styled-components";

import img1 from "../assets/images/bg-2.jpg";
import img2 from "../assets/images/bg-3.jpg";

// Container for the section
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
  width: 80%;
  margin: 100px auto 0;
`;

// Container for each individual section
const Div = styled.div`
  width: 50%;
  height: 400px;
  background-image: url(${img2});
  background-repeat: no-repeat;
  background-size: 130%;
  border-radius: 8px;
  padding: 20px;


  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  div {
    position: relative;
    top: 100px;
    left: 50px;
  }

`;
const Div1 = styled.div`
  width: 50%;
  height: 400px;
  background-image: url(${img1});
  background-repeat: no-repeat;
  background-size: 150%;
  border-radius: 8px;
  padding: 20px;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  div {
    position: relative;
    top: 100px;
    left: 50px;
  }

`;

// Paragraph style
const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 800;
  color: #555; 
  margin-top: 15px;

`;
const Paragraph1 = styled.p`
  font-size: 16px;
  font-weight: 800;
  color: #555; 
  margin-top: 15px;

`;

// Heading 1 style
const Heading = styled.h1`
  font-size: 34px;
  font-weight: 800;
  color: #333;
  margin-top: 24px;
`;

// Anchor style
const Anchor = styled.a`
  display: inline-block;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 800;
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function OfferSec() {
  return (
    <Section>
      <Div>
        <div>
          <Paragraph>Low Price</Paragraph>
          <Heading>High Coziness</Heading>
          <Paragraph1>UPTO 50% OFF</Paragraph1>
          <Anchor href="">Explore Items</Anchor>
        </div>
      </Div>
      <Div1>
        <div>
          <Paragraph>Beyoung presents</Paragraph>
          <Heading>Breezy Summer Style</Heading>
          <Paragraph1>UPTO 50% OFF</Paragraph1>
          <Anchor href="">Explore Items</Anchor>
        </div>
      </Div1>
    </Section>
  );
}
