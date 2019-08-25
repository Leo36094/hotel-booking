import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './style.module.scss'

import Item from './components/Item'

const cx = classnames.bind(styles)

const propTypes = {
  className: PropTypes.string,
}

function List (props) {
  const { type, prefix, className, ...restProps } = props
  return (
    <div className={cx('list', className)} {...restProps}></div>
  )
}

List.Item = Item

List.propTypes = propTypes;

export default List