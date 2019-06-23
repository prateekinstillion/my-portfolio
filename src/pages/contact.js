import React from "react"
import SocialContact from "../components/Contact/SocialContact"
import contactDetails from "../portfolioData/contactData"
import socialWorks from "../portfolioData/socialData"
import {
  ContactWrapper,
  ContactHeader,
  ContactDetails,
  ContactBox,
} from "../styles/contactStyles.js"
import Layout from "../layouts/layout"

const Contact = () => (
  <Layout>
    <ContactWrapper>
      <ContactHeader>
        <h1 className="text-focus-in">Get in touch</h1>
      </ContactHeader>
      <ContactDetails>
        <ContactBox>
          <h3>Contact Details</h3>
          {contactDetails.map(item => (
            <SocialContact key={item.id} info={item} />
          ))}
        </ContactBox>
        <ContactBox>
          <h3>Look me up online</h3>
          {socialWorks.map(item => (
            <SocialContact key={item.id} info={item} />
          ))}
        </ContactBox>
      </ContactDetails>
    </ContactWrapper>
  </Layout>
)

export default Contact
