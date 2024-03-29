import { gql, useQuery } from '@apollo/client';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      gender
      image
      type
      status
      species
      location {
        name
      }
    }
  }
`;

const useCharacter = (id) => {
  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return { data, error, loading };
};

export default useCharacter;
