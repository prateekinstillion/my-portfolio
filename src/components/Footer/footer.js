import React from "react"
import PropTypes from "prop-types"

const Footer = ({ footerClass }) => {
  return (
    <div className={`defaultFooter ${footerClass}`}>
      <p>Made with ❤ by Prateek Madaan </p>
    </div>
  )
}
Footer.propTypes = {
  footerClass: PropTypes.string.isRequired,
}
export default Footer
