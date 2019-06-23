/**
 * @desc Main Styles for the Index Page
 */

import styled from "styled-components"

export const MainWrapper = styled.div`
  margin: 10% auto;
`

export const MainTitle = styled.h1`
  letter-spacing: 2px;
  font-weight: bold;
  color: #ffffff;
  .text-focus-in {
    -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53)
      both;
    animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
  h1 {
    font-size: 2em;
  }
  span {
    color: #7fa1e8;
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

  @media (max-width: 700px) {
    font-size: 1.8em;
  }
`

export const MainDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-bottom: 10%;
  p {
    color: #ffffff;
    max-width: 90%;
    font-weight: 300;
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 15%;
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    p {
      max-width: 100%;
      font-size: 19px;
    }
  }
`
// UNCOMMENT IF REQUIRED

// export const ResumeDownloadBtn = styled.a`
//   width: 298px;
//   height: 71px;
//   background-color: rgba(188, 188, 188, 0.1);
//   box-sizing: border-box;
//   display: flex;
//   align-items: center;
//   justify-content: CENTER;
//   text-decoration: none;
//   color: #ffffff;
//   cursor: pointer;
//   :hover{
//     color: #7fa1e8;
//   }
//   @media (max-width: 700px) {
//     width: 100%;
//   }
// `

export const MainTopic = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
