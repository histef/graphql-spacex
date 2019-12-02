import React from 'react';
import Moment from 'react-moment';

export default function LaunchListItem({launch: {flight_number, mission_name, launch_date_local, launch_success}}) {
  return (
    <div className='card card-body' style={{margin: '12px'}}>
      <div className='row'>
        <div className=" col-md-9">
          <h3>Mission: {mission_name}</h3>
          <p className="card-subtitle mb-2 text-muted">
            Date: <Moment format="L">{launch_date_local}
            </Moment>
          </p>
        </div>
        <div className='col-md-3 align-self-center'>
          <button type="button" class="btn btn-dark">Mission Details</button>
        </div>
      </div>
    </div>
  )
}
