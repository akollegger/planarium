import React from 'react'
import ReactDOM from 'react-dom'
import range from 'lodash/range'
import * as d3 from 'd3'
import * as d3Scale from 'd3-scale'
import ReactFauxDom from 'react-faux-dom'

class RedLine extends React.Component {

  render() {
    return(
      <svg className="redline" width={600} height={20}>
        <path stroke="red" d="M0,0V0H500V0" class="my-red-line" />
      </svg>);
  }
}

class D3RedLine extends React.Component {
  render() {
    return (
      <svg className="d3-redline" width={600} height={20}/>
    ); // d3 will modify the DOM below
  }

  componentDidMount() {
    let line = d3.line();
    let pathString = line([ [0,0], [500,0] ]);
    d3.select(".d3-redline")
      .append("path")
      .attr("d", pathString)
      .style("stroke", "red");
  }
}

class ReactD3RedLine extends React.Component {

  render() {
    let line = d3.line();
    let pathString = line([ [0,0], [500,0] ]);
    return (
      <svg className="react-d3-redline" width={600} height={20}>
        <path stroke="red" d={pathString} class="my-red-line"/>
      </svg>
    );
  }
}

class FauxRedLine extends React.Component {
  render() {
    let node = ReactFauxDom.createElement("svg");
    node.setAttribute("class", "faux-redline");
    node.setAttribute("width", 600);
    node.setAttribute("height", 20);
    this.drawLine(node);
    return node.toReact();
  }

  drawLine(node) {
    let line = d3.line();
    let pathString = line([ [0,0], [500,0] ]);
    d3.select(node)
      .append("path")
      .attr("d", pathString)
      .style("stroke", "red");
  }
}

const Demo = React.createClass({

  render () {
    return (
      <div>
        <h3>RedLine</h3>
        <p>This line is plain SVG as rendered by React.</p>
        <RedLine />

        <h3>D3RedLine</h3>
        <p>This line is drawn by D3 <i>after</i> React has <code>componentDidMount()</code>-ed.</p>
        <D3RedLine />

        <h3>ReactD3RedLine</h3>
        <p>This is an SVG rendered by React, with path information calculated by D3.</p>
        <ReactD3RedLine />

        <h3>FauxRedLine</h3>
        <p>Finally, this line is created by D3 appending to a "faux" DOM node,
        which is then converted to React elements in <code>render()</code>.</p>
        <FauxRedLine />
      </div>
    )
  },
})

export default Demo
