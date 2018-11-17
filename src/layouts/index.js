import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './app.css';
import './mobile.css';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='IconNest'
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,maximum-scale=3'
        },
        {
          name: 'viewport',
          content: 'width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'http://www.geticonnest.com'
        },
        {
          property: 'og:title',
          content: 'Icon Nest'
        },
        {
          property: 'og:description',
          content: 'Beautiful and simple open source SVG icons.'
        },
        {
          property: 'og:logo',
          content: 'https://s3.amazonaws.com/icon-nest/assets/Icon-Nest-Logo.png'
        },
        {
          property: 'og:image',
          content: 'https://s3.amazonaws.com/icon-nest/assets/Icon-Nest-Logo.png'
        },
        {
          name: 'og:image:secure_url',
          content: 'https://s3.amazonaws.com/icon-nest/assets/Icon-Nest-Logo.png'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: 'Icon Nest'
        },
        {
          name: 'twitter:description',
          content: 'Beautiful and simple open source SVG icons.'
        },
        {
          name: 'twitter:image',
          content: 'https://s3.amazonaws.com/icon-nest/assets/Icon-Nest-Logo.png'
        },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />
      <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>

      <link rel="stylesheet" href="/css/normalize.css" type="text/css" media="screen" />

      <meta name="google-site-verification" content="" />
      <link rel="icon" type="image/png" href="" sizes="32x32" />
    </Helmet>

    <Header />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
