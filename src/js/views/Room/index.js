import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './style.module.scss'

// components
import Logo from '../../components/Logo'
import ContactList from '../Home/components/ContactList'

// api
import { roomListApi } from '../../lib/api/room'

import { room as roomInfo } from './room'

const cx = classnames.bind(styles)
const propTypes = {
  history: PropTypes.object,
  handleRoutes: PropTypes.func
}

function Room(props) {
  const { history, match, handleRoutes } = props
  const { url } = match
  console.log(url)
  const [roomList, setRoomList] = useState([])
  // const handleRoutes = (path) => {
  //   return path
  // }
  useEffect(() => {
    roomListApi().then(({ data }) => setRoomList(data.items))
  }, [])

  return (
    <div className={cx('room')}>
      <div className={cx('room-banner')}>
        <div className={cx('room-banner__content')}>
          <Logo
            className={cx('room-banner__logo')}
            onClick={() => history.goBack()}
            style={{ cursor: 'pointer' }}
          />
          <div className={cx('room-banner__contact')}>
            <div className={cx('room-social-media')}>
              <i className={cx('fab', 'fa-lg', 'fa-facebook-square')} />
              <i className={cx('fab', 'fa-lg', 'fa-instagram')} />
            </div>
            <ContactList />
          </div>
        </div>
      </div>
      {/* Room List */}
      <div className={cx('room-list')}>
        {roomList.length > 0
          ? roomList.map(room => (
              <div
                className={cx('card')}
                key={room.id}
                style={{ backgroundImage: `url(${room.imageUrl})` }}
              >
                <div
                  className={cx('card-info')}
                  onClick={() => handleRoutes(room.id)}
                >
                  <p className={cx('card-title')}> {room.name} </p>
                  <p className={cx('card-description')}>
                    {roomInfo[room.name]}
                  </p>
                  <div className={cx('card-price')}>
                    <div className={cx('card-price__normal')}>
                      <span>NT.{room.normalDayPrice}</span>
                      平日
                    </div>
                    <div className={cx('card-price__holiday')}>
                      <span>NT.{room.holidayPrice}</span>
                      假日
                    </div>
                  </div>
                </div>
              </div>
            ))
          : 'Loading'}
      </div>
      {/* Room List */}
    </div>
  )
}
Room.propTypes = propTypes
export default Room
