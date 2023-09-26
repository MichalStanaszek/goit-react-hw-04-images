import React, { useState } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event, query);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles['SearchForm-button']}>
          <span className={styles['SearchForm-button-label']}>Search</span>
        </button>
        <input
          className={styles['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search some photos"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
