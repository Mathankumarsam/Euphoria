import React from "react";
import styled from "styled-components";

export default function Feedback() {
  return (
    <SectionWrapper>
      <Container>
        <Hr />
        <Title>Feed back</Title>
      </Container>
      <Section>
        <ReviewContainer>
          <div>
            <Profile>
              <ProfileImage src={require("../assets/icons/span-1.svg").default} alt="Floyd Miles" />
              <Name>Floyd Miles</Name>
            </Profile>
            <Rating src="" alt="Ratings star" />
          </div>
          <ReviewText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </ReviewText>
        </ReviewContainer>

        <ReviewContainer>
          <div>
            <Profile>
              <ProfileImage src={require("../assets/icons/span-2.svg").default} alt="Floyd Miles" />
              <Name>Floyd Miles</Name>
            </Profile>
            <Rating src="" alt="Ratings star" />
          </div>
          <ReviewText>
            Ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </ReviewText>
        </ReviewContainer>

        <ReviewContainer>
          <div>
            <Profile>
              <ProfileImage  src={require("../assets/icons/span-3.svg").default} alt="Floyd Miles" />
              <Name>Floyd Miles</Name>
            </Profile>
            <Rating src="" alt="Ratings star" />
          </div>
          <ReviewText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </ReviewText>
        </ReviewContainer>
      </Section>
    </SectionWrapper>
  );
}

// Container for the section
const SectionWrapper = styled.section`
  width: 80%;
  margin: 100px auto 0;
`;

const Section = styled.section`
  display: flex;
  gap: 20px;
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

// Container for each review block
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */

  div {
    display: flex;
    justify-content: space-between;
  }
`;

// Inner container for profile picture and name
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Profile image styling
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

// Name styling
const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

// Rating image styling
const Rating = styled.img`
  width: 100px;
  height: 20px;
  object-fit: contain;
`;

// Review text styling
const ReviewText = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-top: 10px;
`;
