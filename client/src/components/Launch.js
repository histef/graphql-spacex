import React, {useEffect} from 'react';
import Link from 'react-router-dom';
import classnames from 'classnames';
import gql from 'graphql-tag'; //makes queries
import { useQuery } from '@apollo/react-hooks';


const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name

    }
  }
`

export default function Launch(props){
  let flight_number = props.match.params
  flight_number = Number(Object.values(flight_number))
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {variables: {flight_number}});

  useEffect(() => {console.log(flight_number)
  })
  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error :(</p>;

  return (
  <div>
    <h2>Launch #{data.launch.flight_number} Details</h2>
    {
      console.log(data)
    }
  </div>
  )
}

