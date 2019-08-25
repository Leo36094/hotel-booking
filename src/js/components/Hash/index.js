import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classnames.bind(styles)

const propTypes = {
  className: PropTypes.string
}

function Hash(props) {
  const { className, ...restProps } = props
  return (
    <div className={cx('hash')} {...restProps}>
      <span className={cx('hash-item')}></span>
      <span className={cx('hash-item')}></span>
      <span className={cx('hash-item')}></span>
    </div>
  )
}
Hash.propTypes = propTypes
export default Hash
