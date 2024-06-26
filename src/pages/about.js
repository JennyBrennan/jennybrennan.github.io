import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import jennybrennan from "../images/jennybrennan.jpg"

class AboutPage extends React.Component {
    render() {
        return (
            <Layout>
                <Metadata title="About Jenny Brennan" desc="AI policy researcher and software engineer" image="jennybrennan" canonical="https://jennybrennan.com/about"/>
                <article>
                    <h1>About</h1>
                    <img className="profile-photo" src={jennybrennan} alt="Jenny Brennan - a brown-haired woman stood infront of the sea"/>
                    <p>I'm interested in how we can test AI models for ethics and safety risks, and use those tests effectively to inform decisionmakers. I work on ethics & safety evaluations at <a href="https://deepmind.google/">Google DeepMind</a>.</p>
                    <p>Prior to that, I lead the <a href="https://adalovelaceinstitute.org">Ada Lovelace Institute</a>'s research programme on Ethics and Accountability in Practice, including methods for inspecting and assessing algorithmic systems and their impact on people and society. </p>
                    <p>Previously in software engineering at <a href="https://twitter.com">Twitter</a> and <a href="https://joinef.com">Entrepreneur First</a>; I've also worked with early stage startups on projects ranging from AI personal assistants to an editor for the BBC micro:bit. I have a soft spot for Clojure and functional programming.</p>
                    <p>I'm a lead instructor with <a href="http://codefirstgirls.org.uk">Code First: Girls</a>, have lectured in Data Ethics at <a href="https://ada.ac.uk/">Ada College</a>, and founded the <a href="https://coderswhoteach.com">Coders Who Teach</a> community; I also curate <a href="http://londontechmeetups.com">London Tech Meetups</a>.</p>
                    <p>When I'm not doing those things, I'm usually drawing, painting or behind a drum kit. I sometimes <a href="http://localhost:8000/ada-lovelace-hashflag-emoji/">design emojis</a>.</p> 
                    {/* <h3>If you need a <a href="/bio">speaker bio or headshot</a>.</h3> */}
                    <h2>Elsewhere on the internet:</h2>
                    <ul>
                        <li><a href="https://twitter.com/jennyhbren" title="Jenny Brennan on Twitter">Twitter</a></li>
                        <li><a href="https://github.com/jennybrennan" title="Jenny Brennan on GitHub">GitHub</a></li>
                        <li><a href="https://uk.linkedin.com/in/jennyhbren" title="Jenny Brennan on LinkedIn">LinkedIn</a></li>
                        <li>Email <a href="mailto:hello@jennybrennan.com" title="Email Jenny Brennan">hello&#64;jennybrennan.com</a></li>
                    </ul>
                </article>
            </Layout>
        )   
    }
}

export default AboutPage