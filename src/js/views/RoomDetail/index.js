import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

import { roomDetailApi } from '../../lib/api/room'

import Logo from '../../components/Logo'
import List from '../../components/List'
import Hash from '../../components/Hash'
import Amenities from './components/Amenities'
import Calendar from './components/Calendar'

const cx = classnames.bind(styles)

const propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}

function RoomDetail(props) {
  const { match } = props
  const { params } = match
  const [roomInfo, setRoomInfo] = useState([])
  const [loaded, setIsLoaded] = useState(false)
  const [amenitiesInfo, setAmenitiesInfo] = useState([])

  useEffect(() => {
    roomDetailApi(params.id).then(({ data }) => {
      setRoomInfo(data.room[0])
      setIsLoaded(data.success)
      setAmenitiesInfo(Object.values(data.room[0].amenities))
    })
  }, [params.id, setRoomInfo, setIsLoaded, setAmenitiesInfo])

  return (
    <div className={cx('room-detail')}>
      <div className={cx('room-detail-header')}>
        <div
          className={cx('room-detail-header__left')}
          style={
            loaded ? { backgroundImage: `url(${roomInfo.imageUrl[0]})` } : {}
          }
        >
          {loaded ? null : 'Loading'}
          <Link to='/hotel-booking' replace>
            <Logo style={{ margin: '60px' }} />
          </Link>
          <div className={cx('room-detail-header__photos')}>
            {loaded
              ? roomInfo.imageUrl
                  .slice(1)
                  .map((image, index) => (
                    <div
                      className={cx('room-detail-header__photo')}
                      style={{ backgroundImage: `url(${image})` }}
                      key={index}
                    />
                  ))
              : 'Loading'}
          </div>
        </div>
        <div className={cx('room-detail-header__right')}></div>
      </div>
      <div className={cx('room-detail-content')}>
        <div className={cx('room-detail-content__left')}>
          <h4 className={cx('room-detail-title')}>{roomInfo.name}</h4>
          <List.Item>
            {loaded &&
              `房客人數限制：${roomInfo.descriptionShort.GuestMin} ~ ${roomInfo.descriptionShort.GuestMax} 人`}
          </List.Item>
          <List.Item>
            床型：{loaded && roomInfo.descriptionShort.Bed.join('、')}
          </List.Item>
          <List.Item>
            衛浴數量： {loaded && roomInfo.descriptionShort['Private-Bath']}
          </List.Item>
          <List.Item>
            房間大小：{' '}
            {loaded && `${roomInfo.descriptionShort.Footage} 平方公尺`}
          </List.Item>
          <List.Item style={{ lineHeight: '20px', letterSpaceing: '1.3px' }}>
            {loaded && roomInfo.description}
          </List.Item>
          <Hash style={{ marginBottom: '30px' }} />
          <div className={cx('room-detail-check')}>
            <span
              className={cx('room-detail-check__time')}
              data-label='Check In'
            >
              {loaded &&
                `${roomInfo.checkInAndOut.checkInEarly} — ${roomInfo.checkInAndOut.checkInLate}`}
            </span>
            <span
              className={cx('room-detail-check__time')}
              data-label='Check Out'
            >
              {loaded && roomInfo.checkInAndOut.checkOut}
            </span>
          </div>
          <Amenities
            disabledList={amenitiesInfo}
            style={{ marginTop: '40px' }}
          />
        </div>
        <div className={cx('room-detail-content__mid')}>
          <div className={cx('room-detail-normal')}>
            <div className={cx('room-detail__title')}>
              NT.{roomInfo.normalDayPrice}
            </div>
            <div className={cx('room-detail__description')}>平日(一 ~ 四)</div>
          </div>
          <div className={cx('room-detail-holiday')}>
            <div
              className={cx(
                'room-detail__title',
                'room-detail__title--secondary'
              )}
            >
              NT.{roomInfo.holidayPrice}
            </div>
            <div className={cx('room-detail__description')}>假日(五 ~ 日)</div>
          </div>
        </div>
        <div className={cx('room-detail-content__right')}>
          <Calendar />
        </div>
      </div>
    </div>
  )
}

RoomDetail.propTypes = propTypes

export default RoomDetail
