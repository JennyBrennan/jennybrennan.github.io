import React from 'react'
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const NotFoundPage = () => (
  <Layout>
    <Metadata title="404 - Page not found" desc="Sad times."/>
    <article>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </article>
  </Layout>
)

export default NotFoundPage
