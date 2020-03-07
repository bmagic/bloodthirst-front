import React from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './styles.scss'
const Slot = ({ items, slot }) => {
  return (
    <div className='item-slot'>
      <h2>{slot}</h2>
      {items.map((item, index) => {
        if (item.slot !== slot) return null

        return (
          <Item key={index} wid={item.wid} date={item.date} />
        )
      })}
    </div>
  )
}

Slot.propTypes = {
  items: PropTypes.array,
  slot: PropTypes.string
}

export default Slot
