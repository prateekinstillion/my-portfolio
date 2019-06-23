import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { siteMeta } from "../portfolioData/seoData"
import Helmet from "react-helmet"
import favicon from "../assets/images/prateek.jpg"
import backgroundWrapper from "../assets/images/background.jpg"
import { Location } from "@reach/router"

import "../layouts/index.css"
import Header from "./Header/header"

const Wrapper = styled.div`
  background-image: url(${backgroundWrapper});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: auto;
  background-position: bottom;
  padding: 5% 8%;
  position: relative;
  @media (max-width: 700px) {
    min-height: 100vh;
    height: auto;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: siteMeta.description },
            { name: "keywords", content: siteMeta.keywords.join(", ") },
            { name: "author", content: siteMeta.author },
            { name: "copyright", content: siteMeta.copyright },
          ]}
          link={[
            { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
          ]}
        />
        <Location>
          {({ location }) => {
            return (
              <Wrapper
                className={location.pathname === "/" ? "cutBackground" : ""}
              >
                <Header />
                {children}
              </Wrapper>
            )
          }}
        </Location>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
