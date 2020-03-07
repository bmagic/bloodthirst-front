import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Item = ({ wid, date }) => (
  <div className='item'>
    <a href={`https://classic.wowhead.com/item=${wid}`}>item</a> used {moment(date).fromNow()}
  </div>
)

Item.propTypes = {
  wid: PropTypes.number,
  date: PropTypes.string
}

export default Item
