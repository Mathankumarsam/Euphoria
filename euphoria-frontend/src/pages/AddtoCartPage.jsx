import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AddtoCartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("You must be logged in to view the cart.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:8000/user/cart/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCartItems(data.cart_items);
        } else {
          const data = await response.json();
          setError(data.message || "Failed to fetch cart items.");
        }
      } catch (err) {
        setError("An error occurred while fetching the cart.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Hr />
          <Title>Your Cart</Title>
        </Container>
        <CartContent>
          {cartItems.length === 0 ? (
            <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
          ) : (
            <CartList>
              {cartItems.map((item, index) => (
                <CartItem key={index}>
                  <h3>{item.product_name}</h3>
                  <p>Quantity: <span>{item.quantity}</span></p>
                  <p>Total Price: <span>${item.total_price}</span></p>
                </CartItem>
              ))}
            </CartList>
          )}
        </CartContent>
      </Section>

      <Footer />
    </>
  );
}


const Section = styled.section`
  width: 80%;
  margin: 50px auto 0;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Container = styled.div`
  width: 430px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
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
  text-align: left;
`;

const CartContent = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const EmptyCartMessage = styled.p`
  font-size: 20px;
  color: #888;
  text-align: center;
`;

const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;

`;

const CartItem = styled.li`
  width: 280px;
  height: 180px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    color: #444;
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 18px;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: #555;

    span {
      font-weight: bold;
      color: #e74c3c;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
`;
