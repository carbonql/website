import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Footer from '../Footer';
import Header from '../Header';

import './markdown.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="CarbonQL"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className="container">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
