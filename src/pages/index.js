import React from "react"
import AboutCard from "../components/About/AboutCard"
import aboutData from "../portfolioData/aboutData"
import {
  MainWrapper,
  MainTitle,
  MainDescription,
  // ResumeDownloadBtn,
  MainTopic,
} from "../styles/mainStyles.js"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <MainWrapper>
        <MainTitle>
          Prateek <span>Madaan</span>
        </MainTitle>
        <MainDescription>
          <div>
            <p>
              Hello there, welcome to my portfolio.I am a full stack web
              developer, blockchain enthusiast and a traveller who loves to code
              and experiment with things.
            </p>
            {/* Add the resume download button if required
            No need to add one since your portfolio is your resume
            PLACEHOLDER TO ADD THE RESUME BUTTON [DO IF NEEDED] */}
          </div>
        </MainDescription>
        <MainTopic>
          {aboutData.map(item => (
            <AboutCard key={item.id} information={item} />
          ))}
        </MainTopic>
      </MainWrapper>
    </Layout>
  )
}

export default IndexPage
