import React from 'react';
import gql from 'graphql-tag'; //makes queries
import { useQuery } from '@apollo/react-hooks';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }
`

export default function Launches(){
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
    <p>{JSON.stringify(data)}</p>
    </div>
  )
}