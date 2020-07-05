import React from 'react'
import Link from 'gatsby-link'
import "./style.css"

class Template extends React.Component {
  render() {
    const {children} = this.props
    let nav
    let footer

    nav = (
      <nav>
        <h1><Link to={'/'} >Jenny Brennan</Link></h1>
        <ul>
          <li><Link to={'/blog'} >Posts</Link></li>
          <li><Link to={'/research'} >Research</Link></li>
          <li><Link to={'/projects'} >Projects</Link></li>
          <li><Link to={'/about'} >About</Link></li>
        </ul>
      </nav>
    )

    footer = (
      <footer>
        <li><a href="https://jennybrennan.com/rss.xml">RSS</a></li>
        <li><a href="https://twitter.com/jennyhbren">Twitter</a></li>
        <li><a href="https://github.com/jennybrennan">GitHub</a></li>
        <li><Link to={'/about-site'}>About this site</Link></li>
      </footer>
    )

    return (
      <div>
        {nav}
        {children}
        {footer}
      </div>
    )
  }
}

export default Template
