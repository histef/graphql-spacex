import React from 'react';

export default function LaunchListItem({launch: {flight_number, mission_name, launch_date_local, launch_success}}) {
  return (
    <div className='card' style={{margin: '12px'}}>
      <div className="card-body">
        <h3>Mission: {mission_name}</h3>
        <p className="card-subtitle mb-2 text-muted">Date: {launch_date_local}</p>
        <button type="button" class="btn btn-dark">Mission Details</button>
      </div>
    </div>
  )
}
