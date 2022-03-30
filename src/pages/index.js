import * as React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const HeroSect = styled.section` 
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InfoSect = styled.section`
  width: inherit;
  height: 60%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InfoContainer = styled.div`
  width: 85%;
  height: 50%;
  background-color: red;
  display: inherit;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 2em 0px 2em;
`

const StyPar = styled.p`

`

// markup
const IndexPage = () => {
  return (
      <Layout>
        <HeroSect>
          <h5>Find out how we can provide you high-quality, professional contract screen printing and embroidery.</h5>
          <button>Learn More</button>
        </HeroSect>
        <InfoSect>
          <InfoContainer>
            <p>Hello World</p>
            <p>Hello World</p>
          </InfoContainer>
          <InfoContainer>
            <p>hello world</p>
            <p>Hello World</p>
          </InfoContainer>
        </InfoSect>

      </Layout>
  )
}

export default IndexPage
