import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"

const About = ({ ...props }) => {
  return (
    <Layout path={props.path}>
      <MyMain className="about-main">
        <SEO title="Page two" />
        <p className="about-text">
          I am a self taught Front End Developer from Italy. <br />I moved to
          London in 2013 where I still live. <br />
          From 2015 to 2019 I ran together with my friends a craft beer brewery
          where I managed sales, marketing and design.
        </p>
        <iframe
          width="100%"
          height="300rem"
          src="https://www.youtube.com/embed/m6Hsg0HxTc4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum ab
          voluptates soluta magni, saepe temporibus expedita amet nulla, aperiam
          ullam magnam et nesciunt. Beatae deleniti pariatur adipisci ab
          doloribus libero ex, porro quaerat corrupti nesciunt molestiae eius
          illo, perferendis dolor rem odio quisquam iusto tempora! Recusandae
          cumque minus, non dicta ipsum eveniet tenetur? Sapiente odit ipsa, ab
          eos architecto quasi explicabo molestiae quisquam asperiores amet
          accusamus laudantium natus incidunt veniam doloribus suscipit quae
          similique obcaecati praesentium nam maiores necessitatibus? Suscipit
          consequuntur exercitationem optio delectus minus ratione enim
          laudantium neque laborum numquam, omnis sequi? Enim non neque in dolor
          accusamus.
        </p>
      </MyMain>
    </Layout>
  )
}

const MyMain = styled(Main)`
  p {
    color: var(--off-white);
    font-size: 2rem;
    line-height: 1.3;
  }
`

export default About
