import { gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        id
        gender
        image
      }
    }
  }
`;
export default function useCharacters() {
  const { loading, data, error } = useQuery(GET_CHARACTERS);
  return { error, data, loading };
}
