import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DataContext } from "../services/ProductApi";

export default function CategoriesPage() {
    const context = useContext(DataContext);
    const [category, setCategory] = useState();
  
    const { data = [], loading, error } = context;

    useEffect(() => {
        if (Array.isArray(data)) {
          const filteredProduct = data.filter((product) =>
            product.category
          );
          setCategory(filteredProduct);
        }
      }, [data]);
    
      if (loading) return <div>Loading...</div>; 
      if (error) return <div>Error loading data</div>; 

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Hr />
          <Title>Categories</Title>
        </Container>
        <CategorySec>

        </CategorySec>
      </Section>
      <Footer />
    </>
  );
}


const Section = styled.section`
  width: 80%;
  margin: 100px auto 0;
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


const CategorySec = styled.section``;

