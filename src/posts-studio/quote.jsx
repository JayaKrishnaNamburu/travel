import React from 'react'

import PropTypes from 'prop-types'

import styles from './quote.module.css'

const Quote = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}></div>
      <span className={styles.text}>{props.text}</span>
    </div>
  )
}

Quote.defaultProps = {
  text: 'Text',
}

Quote.propTypes = {
  text: PropTypes.string,
}

export default Quote
