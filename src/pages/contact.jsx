import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contáctame</Header>
    <Container text>
      <h1>Contáctame</h1>
      <p>Puedes contactarme en</p>
      <h2>+569985049225 &nbsp;|&nbsp; ange.drewtruck@gmail.com</h2>
    </Container>
    <Footer />
  </div>
);

export default Contact;
