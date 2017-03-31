import React from 'react'
import Demo from './_Demo'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

exports.data = {
  title: 'React Friends D3',
}

const SomeReactCode = React.createClass({

  render () {
    const page = this.props.route.page

    return (
      <DocumentTitle title={`${page.data.title} | ${config.siteTitle}`}>
        <div>
          <h1>React Friends D3</h1>
          <p>
          </p>
          <p>
            Examples from <a href="https://medium.com/@hollandmatt/react-and-d3-friends-forever-3bc6797749d3">
            React and d3: Friends Forever?</a>, which illustrate different ways of combining React with D3.
          </p>
          <div
            style={{
              height: 500,
            }}
          >
            <Demo />
          </div>
        </div>
      </DocumentTitle>
    )
  },
})

export default SomeReactCode
