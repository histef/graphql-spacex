import React from 'react';
import gql from 'graphql-tag'; //makes queries
import { useQuery } from '@apollo/react-hooks';
import LaunchListItem from './LaunchListItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
    }
  }
`

export default function Launches(){
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2 className="display-5 my-4">Launches</h2>
      {
        data.launches.map( launch => (
          <LaunchListItem key={launch.flight_number} launch={launch}/>
        ))
      }
    </div>
  )
}