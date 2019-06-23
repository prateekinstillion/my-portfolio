import React from "react"
import PropTypes from "prop-types"

const Footer = ({ footerClass }) => {
  return (
    <div className={`defaultFooter ${footerClass}`}>
      <p>Made by Prateek Madaan | Copyright &copy; 2019. All Rights Reserved</p>
    </div>
  )
}
Footer.propTypes = {
  footerClass: PropTypes.string.isRequired,
}
export default Footer
