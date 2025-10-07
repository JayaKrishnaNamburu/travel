import React from 'react'

const Tag = ({ tag, size }) => {
  return (
    <button
      style={{
        padding: size === 'sm' ? '5px 8px' : '6px 15px',
        borderRadius: '6px',
        marginRight: '5px',
        marginTop: '10px',
        fontSize: size === 'sm' ? '1rem' : '1.4rem',
        backgroundColor: '#555edc',
        color: '#fff',
      }}
    >
      {tag}
    </button>
  )
}

export default Tag
