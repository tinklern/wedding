import React from 'react'
import Head from 'next/head'
import Header from '../components/header/header'

const Home = () => (
  <div>

    <Header>
      <div className="portrait">
        <img src="/V&N_3.jpg"></img>
      </div>
      <div className="bounds">
        <div className="section text-section context">
          COME CELEBRATE OUR WEDDING!
        </div>
        <div className="line">
          <hr></hr>
        </div>

        <div className="section text-section header">
          Virginia Mildred Chu
        </div>
        <div className="section text-section context">
          - <em>AND</em> -
        </div>
        <div className="section text-section header">
          Nathaniel Allen Tinkler
        </div>
        <div className="line">
          <hr></hr>
        </div>
        <div className="section text-section context">
          Saturday, April 11th, 2020
        </div>
        <div className="section text-section paragraph">
            <em>Virginia and Nate joyfully request the pleasure of your company as we celebrate our marriage.</em>
        </div>
      </div>

      <div className="line footer">
        <hr/>
        <div className="section text-section context">
          last updated - 10/22/2019
        </div>
      </div>


      <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=EB+Garamond&display=swap');

      .portrait {
        margin-bottom: 34px;
      }

      .footer .section.context {
        margin-bottom: 100px;
        font-size: 9px;
      }

      .bounds {
        max-width: 450px;
        margin: auto;
      }
      
      .section {
        padding-top: 17px;
        padding-bottom: 17px;
      }

      .text-section {
        text-decoration-line: none;
        text-decoration-style: solid;
        text-size-adjust: 100%;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        color: #1c1c1c;
        line-height: 1.2em;
        text-align: center;
        width: 100%;
      }

      .context {
        font-size: 12px;
        font-style:normal;
        font-weight:300;
      }

      .text-section.paragraph {
        font-size: 14px;
        margin-top: 75px;
        margin-bottom: 75px;
        font-weight: 400;
      }

      .text-section em {
        font-family: 'EB Garamond', serif;
        font-style: italic;
      }

      .line hr {
        height: 2px;
        color: #eee;
        background-color: #eee;
        margin: 0;
        border-style: none;
        border-width: 0;
      }

      `}</style>
    </Header>
  </div>
)

export default Home
