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
  p.bounce-top {
    -webkit-animation: bounce-top 0.9s both;
    animation: bounce-top 0.9s both;
    color: #ffffff;
    max-width: 90%;
    font-weight: 300;
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 15%;
  }
  @-webkit-keyframes bounce-top {
    0% {
      -webkit-transform: translateY(-45px);
      transform: translateY(-45px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      -webkit-transform: translateY(-24px);
      transform: translateY(-24px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    65% {
      -webkit-transform: translateY(-12px);
      transform: translateY(-12px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    82% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    93% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }
  @keyframes bounce-top {
    0% {
      -webkit-transform: translateY(-45px);
      transform: translateY(-45px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      -webkit-transform: translateY(-24px);
      transform: translateY(-24px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    65% {
      -webkit-transform: translateY(-12px);
      transform: translateY(-12px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    82% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    93% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    p.bounce-top {
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
