import Link from "gatsby-link"
import React from "react"
import styled from "styled-components"

const AboutStyleWrapper = styled.div`
  min-height: 287px;
  border-radius: 8px;
  background-color: #ffffff;
  font-size: 20px;
  letter-spacing: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 3% 2%;
  margin-right: 3%;
  margin-bottom: 3%;
  width: 30%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.5s ease-out;
  :hover {
    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.5s;
    transform: scale(1.2);
    transition: transform 2s;
  }
  :last-of-type {
    margin-right: 0;
  }
  .tracking-in-expand {
    -webkit-animation: tracking-in-expand 2s cubic-bezier(0.215, 0.61, 0.355, 1)
      both;
    animation: tracking-in-expand 2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }
  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  h3 {
    text-align: center;
  }
  a {
    margin-top: auto;
    color: #7fa1e8;
    text-align: center;
    text-decoration: none;
  }
  a:hover {
    color: goldenrod;
  }
  @media (max-width: 700px) {
    width: 100%;
    min-height: auto;
    padding: 5%;
  }
`
const AboutCard = ({ information: { title, path, description } }) => (
  <AboutStyleWrapper>
    <div className="tracking-in-expand">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={path}>Read more</Link>
    </div>
  </AboutStyleWrapper>
)
export default AboutCard
