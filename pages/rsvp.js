import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/layout'

export default class RSVP extends React.Component {

  componentDidMount() {
    const initCalendlyScript = document.createElement('script')
    initCalendlyScript.innerHTML = `
    Calendly.initInlineWidget({
      url: 'https://calendly.com/chu-tinkler-wedding/chu-tinkler-wedding',
      parentElement: document.getElementById('calendlyRoot'),
      prefill: {},
      utm: {}
     });
    `
    document.body.appendChild(initCalendlyScript)
  }

  render() {
    return (
      <div>
        <Head>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
        </Head>
        <Layout selected="RSVP">
          <div id="calendlyRoot" className="calendlyRoot"></div>
          <style jsx>{`
            .calendlyRoot {
              width: 800px;
              height: 1170px;
            }
          `}</style>
        </Layout>
      </div>
    )
  }
}
