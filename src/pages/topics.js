import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import Categories from '../components/Categories'

const AboutPage = () => (
  <Layout>
    <main>
      <Helmet title={`Company categories | ${config.siteTitle}`} />
      <Categories />
    </main>
  </Layout>
)

export default AboutPage
