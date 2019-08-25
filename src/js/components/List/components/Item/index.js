import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classnames.bind(styles)

const propTypes = {
  className: PropTypes.string,
  prefix: PropTypes.node,
  margin: PropTypes.string,
  style: PropTypes.object
}
const defaultProps = {
  margin: '0 0 15px 0',
}

function Item(props) {
  const { className, prefix, margin, style, ...restProps } = props

  return (
    <div
      className={cx('item-container', className)}
      style={{ margin, ...style }}
    >
      {prefix && prefix}
      <div className={cx('item')} {...restProps} />
    </div>
  )
}

Item.propTypes = propTypes
Item.defaultProps = defaultProps

export default Item
