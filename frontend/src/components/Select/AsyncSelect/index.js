import React from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';

const style = {
  control: (base) => ({
    ...base,
    border: '1px solid #ccc',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #ccc',
    },
  }),
};

function AsyncSelectWrapper({ data, placeholderText, action, defaultValue }) {
  const filter = (inputValue) => {
    return data.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promise = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filter(inputValue));
      }, 1000);
    });

  return (
    <AsyncSelect
      name="recipient_id"
      styles={style}
      cacheOptions
      placeholder={placeholderText}
      loadOptions={promise}
      defaultOptions={data}
      onChange={action}
      value={
        defaultValue ? data.filter((d) => d.value === defaultValue.value) : null
      }
    />
  );
}

export default AsyncSelectWrapper;

AsyncSelectWrapper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  placeholderText: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  defaultValue: PropTypes.shape().isRequired,
};
