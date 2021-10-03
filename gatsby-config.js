const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Tailwind`,
    description: `Gatsby starter styled with Tailwind`,
    author: `@taylorbryant`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    // `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: "#122232",
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    // {
    //   resolve: "gatsby-source-prismic",
    //   options: {
    //     repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    //     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    //     customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
    //     // linkResolver: (doc) => linkResolver(doc),
    //   },
    // },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        // linkResolver: () => prismicLinkResolver,
        // htmlSerializer: () => prismicHtmlSerializer,
        schemas: {
          page: require("./schemas/page.json"),
        },
        // lang: 'en-gb',
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
