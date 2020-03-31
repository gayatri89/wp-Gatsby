import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Blog = ({ pageContext }) => {
    const { posts } = pageContext

    const formatDate = date => {

        const dateObj = new Date(date)
        return dateObj.toLocaleDateString()
    }    

    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>

            { 
                posts.map(post => (
                    <article className="card post-card" id={`post-${post.id}`} key={post.id}
                        
                    > 
                        <h2 style={{margin: 0}}>{post.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                        <span  className="post-meta">Posted by <Link to={`/user/${post.author.slug}`}>{post.author.name}</Link> | { formatDate(post.date) }</span>
                        <Link to={`/blog/${post.slug}`} className="readmore"
                        >Read More</Link>
                    </article>
                ))
            }
            
        </Layout>
    )
}

export default Blog