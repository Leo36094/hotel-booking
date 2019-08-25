import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './style.module.scss'

import List from '../../../../components/List'

import { icons } from './icons'

const cx = classnames.bind(styles)

const propTypes = {
  disabledList: PropTypes.array
}

function Amenities(props) {
  const { disabledList, ...restProps } = props
  const iconList = icons.map((item, index) => ({
    disabled: disabledList ? disabledList[index] : true,
    ...item
  }))
  return (
    <div className={cx('amenities')} {...restProps}>
      {iconList.map((item, index) => {
        return (
          <List.Item
            className={cx(
              'amenities-item',
              !item.disabled && 'amenities-item--disabled'
            )}
            key={index}
            prefix={<i className={cx('fas', 'fa-lg', `${item.className}`)} />}
          >
            {item.name}
          </List.Item>
        )
      })}
    </div>
  )
}

Amenities.propTypes = propTypes

export default Amenities
