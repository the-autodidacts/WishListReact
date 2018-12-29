import React from 'react';
import Holiday from './Holiday'

const HolidayList = props => {
  // console.log("HolidayList props:", props);

  const mappedHolidays = props.holidays.map((holiday) => {
    return <Holiday holiday={holiday} key={holiday.id}/>
  })


  return (
    <div className="list-group">{mappedHolidays}</div>
  )
}

export default HolidayList;
