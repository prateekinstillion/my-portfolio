import React from "react"
import styled from "styled-components"

const ContactWrapper = styled.div`
  margin-bottom: 20px;
  img {
    margin: 0 20px 0 0;
  }
  @media (max-width: 700px) {
    img {
      margin: 10% 0;
    }
  }
`
const ContactLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  p {
    font-size: 30px;
    color: #ffffff;
    margin: 0;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    p {
      font-size: 20px;
    }
  }
`
const ContactSection = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 30px;
    color: #ffffff;
    margin: 0;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    p {
      font-size: 20px;
    }
  }
`
const SocialContact = ({ info }) => (
  <ContactWrapper>
    {info.linkTo ? (
      <ContactLink href={info.path}>
        <img src={info.icon} alt="contact link prateek" />
        <p>{info.title}</p>
      </ContactLink>
    ) : (
      <ContactSection>
        <img src={info.icon} alt="contact link prateek" />
        <p>{info.title}</p>
      </ContactSection>
    )}
  </ContactWrapper>
)

export default SocialContact
