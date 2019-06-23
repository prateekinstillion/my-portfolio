module.exports = {
  siteMetadata: {
    title: "Prateek Madaan",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Righteous`,
          `source sans pro\:300,400,600`, // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130172537-1",
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // To enable or disable the loading spinner.
        showSpinner: true,
      },
    },
  ],
}
