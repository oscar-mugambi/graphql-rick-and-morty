import React from 'react';
import { useParams } from 'react-router';
import useCharacter from '../hooks/useCharacter';

export default function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);
  console.log(data, id);

  if (error) return <div>something went wrong</div>;
  if (loading) return <div>spinner</div>;

  return (
    <div className='character'>
      <img src={data.character.image} width={750} height={750} alt='image' />
      <div className='character-content'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
      </div>
    </div>
  );
}
