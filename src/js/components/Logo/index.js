import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './style.module.scss'

const propTypes = {
  type: PropTypes.oneOf(['square', 'rectangle']),
  className: PropTypes.string,
}
const defaultProps = {
  type: 'square'
}

const cx = classnames.bind(styles)

function Logo (props) {
  const { type, className, ...restProps } = props
  return <div className={cx("logo", className)} data-logo-type={type} {...restProps} >White Space</div>
}

Logo.propTypes = propTypes
Logo.defaultProps = defaultProps

export default Logo