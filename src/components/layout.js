import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Sidebar from "./sidebar"
import RecentPosts from './recent-posts'
import "./layout.css"
import fbIcon from '../images/fb-img.png'
import gmIcon from '../images/gm-img.png'
import instIcon from '../images/instagrm.png'
import pintIcon from '../images/pinterest.png'
import ytcon from '../images/yt-img.png'
import twtrIcon from '../images/tw-img.png'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  font-family: 'Roboto', sans-serif;
`

const PageContent = styled.div`
  flex: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`
const Main = styled.main`
  flex: 1;
  margin-right: 25px;
`

const Footer = styled.footer`
  margin-top: 50px;
`

const Socials = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  padding-bottom: 10px;

  img {
    width: 50px;
    height: 50px;

    &:first-of-type {
      margin-right: 10px;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} siteDesc={data.site.siteMetadata.description} />
      <Container>
        <PageContent className="page-content">
          <Main>{children}</Main>
          {/* <Sidebar>
            <RecentPosts />

          </Sidebar> */}
        </PageContent>
<hr style={{border:'1px solid #904a8e'}}/>
        <Footer>
          <a style={{marginTop:'20px'}} href="">Bangalore</a> | <a href="">Chennai</a> | <a href="">Mumbai</a> | <a href="">Pune</a> | <a href="">Noida</a> | <a href="">Gurgram</a> | <a href="">Chandigarh</a> | <a href="">New Delhi</a>
        <Socials style={{marginLeft:'70%'}} className="social-icons">
          <a href="https://twitter.com/CloudnineCare">
              <img style={{width:'35px',height:'37px'}} src={twtrIcon} alt="twitter icon" />
            </a>
            <a href="https://www.facebook.com/CloudnineCare/">
              <img style={{width:'35px',height:'37px'}} src={fbIcon} alt="instagram icon" />
            </a>
            <a href="https://www.youtube.com/user/Cloudninecare">
              <img style={{width:'35px',height:'37px'}}  src={ytcon} alt="twitter icon" />
            </a>
            <a href="https://www.linkedin.com/company/cloudninehospitals/">
              <img style={{width:'35px',height:'37px'}} src={gmIcon} alt="instagram icon" />
            </a>
            <a href="https://www.instagram.com/cloudnine_care/">
              <img style={{width:'35px',height:'37px'}} src={instIcon} alt="twitter icon" />
            </a>
            <a href="https://in.pinterest.com/cloudnineindia/">
              <img style={{width:'35px',height:'37px'}} src={pintIcon} alt="instagram icon" />
            </a>
          </Socials>
          <div style={{marginLeft:'35%'}}>© {new Date().getFullYear()} Alex Crocker, Built with Gatsby</div>
          {` `}
          
        </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
