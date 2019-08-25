import React from 'react'
import classnames from 'classnames/bind'
import styles from './style.module.scss'
import ReactCalendar from 'react-calendar'

const cx = classnames.bind(styles)

function Calendar(props) {
  return <ReactCalendar className={cx('calendar')} value={new Date()} />
}

export default Calendar
