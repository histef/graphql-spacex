import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import gql from 'graphql-tag'; //makes queries
import { useQuery } from '@apollo/react-hooks';


const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_id,
        rocket_name,
        rocket_type
      }
    }
  }
`

export default function Launch(props){
  let flight_number = props.match.params
  flight_number = Number(Object.values(flight_number))
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {variables: {flight_number}});
  // const {
  //   mission_name,
  //   rocket: {rocket_id, rocket_name, rocket_type}
  // } = data.launch

  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error :(</p>;

  return (
  <div>
    <h2 style={{margin: '25px'}}>{data.launch.mission_name}</h2>
    <h4 style={{margin: '25px'}}>Launch Details</h4>
    <ul className='list-group' style={{margin: '0 50px'}}>
      <li className='list-group-item'>
        <div>flight #{data.launch.flight_number}</div>
        <div>flight_number: {flight_number}</div>
        <div>year: {data.launch.launch_year}</div>
        <div>
          <span className={classnames({
              'text-success': data.launch.launch_success,
              'text-danger': !data.launch.launch_success})}>
            {data.launch.launch_success? 'Success' : 'Fail'}
          </span>
        </div>
      </li>
    </ul>
    <h4 style={{margin: '25px'}}>Rocket Details</h4>
    <ul className='list-group' style={{margin: '0 50px'}}>
      <li className='list-group-item'>
        <div>name: {data.launch.rocket.rocket_name}</div>
        <div>ID: {data.launch.rocket.rocket_id}</div>
        <div>type: {data.launch.rocket.rocket_type}</div>
      </li>
    </ul>
    <Link to="/" style={{margin: '25px'}} className="btn btn-dark">Back</Link>
  </div>
  )
}

