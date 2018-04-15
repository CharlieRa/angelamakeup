# Ange Makeup website build with gatsby starter portfolio: emma

## Description 
* Website for angelamakeup.cl build with gatsby

## Features

- Configurable
    - Use the SiteConfig.js to easily change the most important information
    - Easily change the font
- Automatic colors for your projects (with the help of [vibrant.js](https://jariz.github.io/vibrant.js/))
- Projects in Markdown
- Google Analytics Support
- SEO
    - Sitemap
    - Schema.org JSONLD
    - OpenGraph Tags
    - Twitter Tags
- Offline Support
- WebApp Manifest Support
- Typography.js
- Responsive images
    - The right image size for every screen size
    - Traced SVG loading (lazy-loading)
    - WebP support

## Getting Started
* Install dependecies
```
npm install
```

* For run locally
```
npm run dev
```

* For production build in public folder 
```
npm run build
```

* For producion build for publis to github pages

```
npm run deploy
```

### Adding a new project
- Create a new folder in ``content/projects`` with the current date (Format: YYYY-MM-DD)
- Create a new markdown file, add the frontmatter (use the same date format)
- Add an image and reference it in your frontmatter as ``cover``
- Write your content below the frontmatter

If you're still unsure have a look at the already existing examples.

### Adding new features/plugins

You can add other features by having a look at the offical [plugins page](https://www.gatsbyjs.org/docs/plugins/)

## Configuration

You can configure your setup in ``config/SiteConfig``:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: 'Angela Makeup', // Navigation and Site Title
  siteTitleAlt: 'Angela Makeup - Profesional Makeup Artist', // Alternative Site title for SEO
  siteUrl: 'http://angelamakeup.cl', // Domain of your site. No trailing slash!
  siteLanguage: 'es', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.jpg', // Used for SEO and manifest
  siteDescription: 'Portafolio de trbajos realizados por la profesional Angela Garcia',
  siteFBAppID: '123456789', // Facebook App ID
  userTwitter: 'emma', // Twitter Username
  // og: Meta Tags
  ogSiteName: 'emma', // Facebook Site Name
  googleAnalyticsID: 'UA-12345689-1',
  copyright: 'Copyright © 2018. Todos los derechos reservados.', // Copyright in the footer of the site
  // You can translate these three words into your language if you want.
  // They'll be shown on the project page header
  client: 'Cliente',
  date: 'Fecha',
  service: 'Servicio',
  // Date format used in your project header
  // More information here: https://date-fns.org/v1.29.0/docs/format
  dateFormat: 'DD.MM.YYYY',
  // Manifest and Progress color
  themeColor: '#212121',
  backgroundColor: '#212121',
  // Settings for typography.js
  headerFontFamily: 'Roboto',
  bodyFontFamily: 'Roboto',
  baseFontSize: '16px',
};
```
You can also configure the styling of the site by editing the SCSS variables in ``config/_variables.scss``:

```SCSS
// --------------
// Configuration
// --------------

// Configure your colors here

$brand-primary: #cf1993;
$brand-secondary: #7b8acc;
$grey: #252525;
$black: #000000;

// Configure your grid here
// You don't need to change it!

$content-width: 100vw;
$gutter: 0px;
$columns: 3;

$row-size: calc( (#{$content-width} - #{$gutter} * (#{$columns} - 1)) / #{$columns} );

// Configure the max-width of your containers here
// Try to keep it in sync with maxWidth of `gatsby-remark-images`

$container: 100rem;
$container-text: 55rem; // Longer texts should have a smaller max-width to improve readability

// Responsive Typography
// You can set your min and max font-size here
// More information: https://www.rucksackcss.org/docs/#responsive-type

html {
    font-size: responsive 12px 16px;
    font-range: 420px 1280px;
}
```

**Attention:** You also need to edit ``static/robots.txt`` to include your domain!

## Automatic Colors

By default the hover overlay of the grid image and the header on the project page automatically choose its color by using [react-palette](https://github.com/leonardokl/react-palette).
The plugin chooses the *vibrant* color of the image and applies it as the ``background-color`` for the hover overlay and header background. If you don't want that behavior you can delete the ``<Palette />`` component both from ``pages/index.jsx`` and ``templates/project.jsx``.

## Credits

- Inspired by [gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter)