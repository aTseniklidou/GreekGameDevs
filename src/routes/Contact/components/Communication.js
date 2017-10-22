import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Communication.scss'

import {
  Newsletter,
  Contact,
  Credits,
} from './components'

class Communication extends Component {
  constructor (props: Communication.propTypes) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='container'>
        <Newsletter />
        <Contact />
        <Credits />
      </div>
    )
  }
}
Communication.propTypes = {
}

export default Communication