import React from 'react'
import Link from 'next/link'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

const links = [
  { href: '/', label: 'Home', selected: true},
  { href: '/wedding', label: 'Wedding' },
  { href: '/travel', label: 'Travel' },
  { href: '/photos', label: 'Photos' },
  { href: '/registry', label: 'Registry'},
  { href: '/rsvp', label: 'RSVP'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Header = (props) => (
  <div className="canvas">
    <header className="header-class">
      <h1 className="names">
        Virginia & Nate
      </h1>

      <nav>
        <ul>
          {links.map(({ key, href, label, selected }) => (
            <li key={key}>
              <a href={href} className={selected ? "selected" : ""}>{label}</a>
            </li>
          ))}
        </ul>
        <div className='line'></div>
      </nav>
    </header>

    { props.children }

    <style jsx>{`
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');
    @import url('https://fonts.googleapis.com/css?family=EB+Garamond&display=swap');
    
    :global(body) {
      background-color: #F6F6F6;
      background-image: url('/white_wall_hash.png');
      font-family: 'Nunito Sans', sans-serif;
    }

    .canvas {
      background-color: white;
      border-width: 2px;
      margin: 100px auto;
      border-style: solid;
      border-color: #eee;
      padding: 100px 100px 0;
      max-width: 800px;
    }

    .header-class {
      letter-spacing: 2px;
      font-weight: 600;
      font-style: normal;
      text-transform: uppercase;
      padding-bottom: 65px;
    }

    .names {
      font-family: 'EB Garamond', serif;
      text-align: center;
    }

    nav {
      text-align: center;
    }
    ul {
      display: inline-block;
      justify-content: center;
      padding: 0 32px;
      background-color: #fff;
      color: #fff
    }
    nav > ul > li {
      margin-left: 32px;
      display: inline-block;
      line-height: 1.6em;
    }
    nav> ul > li:first-child {
      margin-left: 0px;
    }

    a {
      font-size: 12px;
      color: rgba(28,28,28,.7);
      border-bottom-color: transparent;
      border-bottom-width: 2px;
      border-bottom-style: solid;
      display: inline-block;
      cursor: pointer;
      text-decoration: none;
    }
    a.selected {
      color: #1c1c1c;
      border-bottom-color: #eee;
    }
    a:hover {
      color: #1c1c1c;
      border-bottom-color: #eee;
    }
   
    .line {
      border-bottom-color: rgb(238, 238, 238);
      border-bottom-style: solid;
      border-bottom-width: 2px;
      margin-top: -1.9em;
      line-height: 19.2px
    }
    `}</style>
  </div>

)

export default Header
