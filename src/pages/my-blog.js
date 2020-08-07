import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog Page" />
    <h1 className="text-center">This is my blog with posts</h1>
    <div className="row">

    <div className="col-md-4">
    	<h2>Some post</h2>
    </div>
    <div className="col-md-4">
    	<h2>Some post</h2>
    </div>
    <div className="col-md-4">
    	<h2>Some post</h2>
    </div>
    <div className="col-md-4">
    	<h2>Some post</h2>
    </div>
    </div>
    
  </Layout>
)

export default BlogPage
