import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Palette from 'react-palette';
import about1 from '../../static/logos/about1.jpg'
import Img from 'gatsby-image'; 

const About = ({ data })  => (
  <div className="container about-container">
    <Helmet title={`Conóceme | ${config.siteTitle}`} />
    <Header>Conóceme</Header>
    <Container text>
      <h1>Hola!</h1>
      <p>
        Soy Ángela García professional makeup artist con más de 7 años de experiencia en maquillaje profesional para televisión, eventos, alfombras rojas, revistas, 
        películas, entre otros.
      </p>
      {/* <div className={styles.image}> */}
      <div>
        <Img sizes={data.about.sizes} />
      </div>
    </Container>
    <Container text>
      <h1>Contáctame</h1>
      <p>Puedes contactarme en</p>
      <h2>+569985049225 &nbsp;|&nbsp; ange.drewtruck@gmail.com</h2>
    </Container>
    <Footer />
  </div>
  );

export default About;

export const pageQuery = graphql`
  query GatsbyImageSampleQuery {
    about: imageSharp(id: { regex: "/about1/" }) {
       sizes(maxWidth: 450, quality: 100, traceSVG: { color: "#f3f3f3" }) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
  }
  `;