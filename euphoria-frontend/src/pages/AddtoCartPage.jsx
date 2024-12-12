import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AddtoCartPage() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Hr />
          <Title>Your Cart</Title>
        </Container>



        
      </Section>

      <Footer />
    </>
  );
}




const Section = styled.section`
  width: 80%;
  margin: 50px auto 0;
`;

const Container = styled.div`
  width: 430px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Hr = styled.hr`
  width: 10px;
  height: 40px;
  border: 0;
  border-radius: 10px;
  background-color: #8a33fd;
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: 600;
  color: #333;
`;
