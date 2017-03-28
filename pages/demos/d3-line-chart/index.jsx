import React from 'react'
import Demo from './_Demo'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

exports.data = {
  title: 'D3 Line Chart',
}

const SomeReactCode = React.createClass({

  render () {
    const page = this.props.route.page

    return (
      <DocumentTitle title={`${page.data.title} | ${config.siteTitle}`}>
        <div>
          <h1>D3 Line Chart</h1>
          <p>
          </p>
          <p>
            A port of the line chart example from <a href="http://blog.bigbinary.com/2016/02/04/using-d3-js-with-react-js.html">
            Using D3 with React JS</a>.
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
