import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({
  label,
  name,
  onSubmit,
  ctaText,
  ariaLabel,
  placeholder,
}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for={name}>{label}</label>
        <input
          id={name}
          name={name}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          value={value}
          type='text'
          aria-label={ariaLabel}
        />
        <button>{ctaText}</button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  name: PropTypes.string,
  onSubmit: PropTypes.func,
  ctaText: PropTypes.string,
  ariaLabel: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SearchBar;
