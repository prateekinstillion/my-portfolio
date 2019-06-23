import styled from "styled-components"

export const ContactWrapper = styled.div`
  margin: 10% auto;
  @media (max-width: 700px) {
    margin: 15% auto;
  }
`
export const ContactHeader = styled.h1`
  text-align: CENTER;
  color: #eeeeee;
  margin-bottom: 5%;
  font-weight: 300;
  letter-spacing: 2px;
  .text-focus-in {
    -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53)
      both;
    animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`
export const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  h3 {
    font-size: 30px;
    color: #7fa1e8;
    font-weight: 300;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 300;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
