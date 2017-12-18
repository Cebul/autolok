import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'


class Template extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    ) //return
  } //render
} //Template

export default Template
