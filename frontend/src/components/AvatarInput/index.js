import React, { useState } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { Container } from './styles';

function AvatarInput({ defaultValue, setFile }) {
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  async function handleChange(e) {
    const data = new FormData();

    await data.append('file', e.target.files[0]);

    console.log(data.getAll('file'));

    const response = await api.post('files', data);

    setPreview(response.data.url);
    setFile(response.data.id);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt="avatar"
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}

export default AvatarInput;

AvatarInput.propTypes = {
  defaultValue: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
  setFile: PropTypes.func.isRequired,
};
