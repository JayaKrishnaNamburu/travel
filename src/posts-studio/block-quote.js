import React from 'react'

import PropTypes from 'prop-types'

import styles from './block-quote.module.css'

const BlockQuote = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}></div>
      <span className={styles.text}>{props.text}</span>
    </div>
  )
}

BlockQuote.defaultProps = {
  text: 'Text',
}

BlockQuote.propTypes = {
  text: PropTypes.string,
}

export default BlockQuote
