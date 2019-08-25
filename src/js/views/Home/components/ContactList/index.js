import React from 'react'
import classnames from 'classnames/bind'
import styles from './style.module.scss'

import List from '../../../../components/List'

const cx = classnames.bind(styles)

function ContactList(props) {
  return (
    <List>
      <List.Item
        className={cx('contact-list')}
        prefix={<i className={cx('fas', 'fa-phone-alt', 'icon')} />}
      >
        02-17264937
      </List.Item>
      <List.Item
        className={cx('contact-list')}
        prefix={<i className={cx('fas', 'fa-envelope', 'icon')} />}
      >
        whitespace@whitespace.com.tw
      </List.Item>
      <List.Item
        className={cx('contact-list')}
        prefix={<i className={cx('fas', 'fa-home', 'icon')} />}
      >
        台北市羅斯福路十段30號
      </List.Item>
    </List>
  )
}

export default ContactList
