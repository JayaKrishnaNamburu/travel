import React, { useEffect, useState } from 'react';
import writeGood from 'write-good';
import styles from './style.module.css';

const SuggestionBox = ({ content }) => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    setSuggestions(writeGood(content));
  }, [content]);
  return (
    <section className={styles.suggestionBox}>
      {suggestions.map(item => (
        <div>
          {item.reason} - index({item.index}) - offset ({item.offset})
        </div>
      ))}
    </section>
  );
};

export default SuggestionBox;
