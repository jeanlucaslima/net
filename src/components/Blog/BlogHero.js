import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  grid-area: InfoLeft;
  width: 100%;
`

const Hero = styled.div`
  display: none;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: block;
    grid-area: left;
    position: fixed !important;
    pointer-events: none;
    transition: opacity 0.3s, visibility 0.3s;
    width: calc(50% - 3rem);
    height: calc(100vh - 5.5rem);
    top: 3.5rem;
    left: 2rem;
    z-index: -99;
    div {
      height: 100% !important;
      object-fit: cover !important;
    }
  }
`
const BlogHero = props => {
  return (
    <Wrapper>
      <Hero>
        <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
      </Hero>
    </Wrapper>
  )
}

export default BlogHero
