import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './style.module.scss'

//components
import Logo from '../../components/Logo'
import List from '../../components/List'
import ContactList from './components/ContactList'

//views

//resources
import { roomBackground } from './path'
import { ROOMTYPE } from './const'

const cx = classnames.bind(styles)
const {
  single,
  deluxeSingle,
  double,
  deluxeDouble,
  twin,
  deluxeTwin
} = roomBackground
const routes = [
  {
    name: 'Single Room',
    component: '',
    type: ROOMTYPE.SINGLE,
    background: single
  },
  {
    name: 'Deluxe Single Room',
    component: '',
    type: ROOMTYPE.DELUXE_SINGLE,
    background: deluxeSingle
  },
  {
    name: 'Double Room',
    component: '',
    type: ROOMTYPE.DOUBLE,
    background: double
  },
  {
    name: 'Deluxe Double Room',
    component: '',
    type: ROOMTYPE.DELUXE_DOUBLE,
    background: deluxeDouble
  },
  {
    name: 'Twin Room',
    component: '',
    type: ROOMTYPE.TWIN,
    background: twin
  },
  {
    name: 'Deluxe Twin Room',
    component: '',
    type: ROOMTYPE.DELUXE_TWIN,
    background: deluxeTwin
  }
]

const propTypes = {
  handleRoutes: PropTypes.func,
}

function Home(props) {
  const { handleRoutes } = props
  const [currentRoom, setCurrentRoom] = useState(routes[3])

  return (
    <div
      className={cx('home')}
      style={{ backgroundImage: `url(${currentRoom.background}` }}
    >

      {/* Left section */}
      <div className={cx('home-left')}>
        <Logo />
        <div className={cx('home-content')}>
          <h2 className={cx('home-content__title')}>{currentRoom.type}</h2>
          <span className={cx('home-content__description')}>
            {currentRoom.name}
          </span>
        </div>
      </div>
      {/* Left section */}

      {/* Right section */}
      <div className={cx('home-right')}>
        <div className={cx('home-nav')}>
          {routes.map(route => (
            <List.Item
              key={route.type}
              margin='0'
              onMouseOver={() => setCurrentRoom(route)}
              onClick={() => handleRoutes()}
            >
              {<span className={cx('home-nav__item')}>{route.name}</span>}
            </List.Item>
          ))}
        </div>
        <div className={cx('home-contact')}>
          <div className={cx('home-social-media')}>
            <i className={cx('fab', 'fa-lg', 'fa-facebook-square')} />
            <i className={cx('fab', 'fa-lg', 'fa-instagram')} />
          </div>
          <ContactList />
        </div>
      </div>
      {/* Right section */}
    </div>
  )
}

Home.propTypes = propTypes
export default Home
