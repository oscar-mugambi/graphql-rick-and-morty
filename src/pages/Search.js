import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocations($name: String) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState('');

  const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATION, {
    variables: {
      name,
    },
  });

  return (
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
    </div>
  );
}
