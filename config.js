const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://www.openpolicy.cloud/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'opc.png',
    logoLink: 'https://www.openpolicy.cloud/',
    title:
      "<a href='https://hasura.io/learn/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/abbaspour/opc-website',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/openpolicycloud" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
    links: [
        { text: 'Documentation', link: 'https://www.openpolicy.cloud/' },
        { text: 'API', link: 'https://docs.openpolicy.cloud/' },
        { text: 'Login', link: 'https://app.openpolicy.cloud/' }
    ],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Open Policy Agent', link: 'https://www.openpolicyagent.org/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://www.penpolicy.cloud/'>Open Policy Cloud</a>",
  },
  siteMetadata: {
    title: 'Open Policy Cloud Website',
    description: 'Open Policy Cloud website based on gatsby-gitbook-starter',
    ogImage: null,
    docsLocation: 'https://github.com/abbaspour/opc-website/tree/master/content',
    favicon: 'https://www.openpolicy.cloud/opc.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'opc.png',
          sizes: `1024x1024`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
