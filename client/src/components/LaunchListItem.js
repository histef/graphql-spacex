import React from 'react';
import Moment from 'react-moment';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default function LaunchListItem({launch: {flight_number, mission_name, launch_date_local, launch_success}}) {
  return (
    <div className='card card-body' style={{margin: '12px'}}>
      <div className='row'>
        <div className=" col-md-9">
          <h3>Mission: <span className={classNames({'text-success': launch_success, 'text-danger': !launch_success})}>{mission_name}</span></h3>
          <p className="card-subtitle mb-2 text-muted">
            Date: <Moment format="L">{launch_date_local}
            </Moment>
          </p>
        </div>
        <div className='col-md-3 align-self-center'>
          <Link to={`launch/${flight_number}`} className="btn btn-dark">Mission Details</Link>
        </div>
      </div>
    </div>
  )
}
