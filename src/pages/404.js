import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout/index'
import config from '../../data/SiteConfig'

const NotFoundPage = () => (
  <Layout>
    <main>
      <Helmet title={`404: Not Found | ${config.siteTitle}`} />
      <h1>404 Not Found</h1>
    </main>
  </Layout>
)

export default NotFoundPage
