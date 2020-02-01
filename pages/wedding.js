import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/layout'

export default class RSVP extends React.Component {

  
  render() {
    return (
      <div>
    <Layout selected="Wedding">
      <div className="bounds">
        <div className="section text-section header">
          Where : Monday Night Garage
        </div>
        <div className="line">
          <hr></hr>
        </div>

        <div className="section text-section context">
           933 Lee St
           <br/>Monday Night Garage is a fun tasting spot for locally brewed Monday Night beer. 
           <br/>We will be dancing and dining in a private section of this space.
        </div>
        
        <div className="section text-section header">
        When : April 11th, 2020
        </div>
        <div className="line">
          <hr></hr>
        </div>
        <div className="section text-section context">
          Come join us Saturday, April 11th! Drinks and hors d'oeurves at 6pm, dinner at 6:45pm, party until 9pm.
        </div>
        <div className="section text-section header">
        What : Drinks, Dinner and Dancing
        </div>
        <div className="line">
          <hr></hr>
        </div>
        <div className="section text-section context">
          Drinks: Several Monday Night Brewing beers will be on tap along with wine and cocktails.
          <br/> Dinner: A buffet of barbeque and sides from Sweet Auburn BBQ.
          <br/>Dancing: We hope you will get out on the dance floor with us. Don't forget to add your favorite boogie song with your RSVP!
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
    </Layout>
  </div>
    )
  }
}
