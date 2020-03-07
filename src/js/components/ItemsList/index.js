import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import queryString from 'query-string'
import './styles.scss'
import Slot from '../Slot'

class ItemsList extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-undef
    $WowheadPower.refreshLinks()
  }

  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      const values = queryString.parse(this.props.location.search)

      this.props.dispatch({ type: 'GET_ITEMS', character: values.character })
    }
    // eslint-disable-next-line no-undef
    $WowheadPower.refreshLinks()
  }

  render () {
    const values = queryString.parse(this.props.location.search)

    const slots = ['head', 'neck', 'shoulder', 'chest', 'waist', 'legs', 'feet', 'wrist', 'hands', 'finger', 'trinket', 'back', 'mainHand', 'offHand', 'ranged']
    const { items } = this.props
    if (items.length === 0) {
      return <div className='content'>No items found yet.</div>
    }
    return (
      <div className='items-list'>
        <h1 className='title'>{values.character} history</h1>
        {slots.map((slot, index) => {
          return <Slot key={index} items={items} slot={slot} />
        })}
      </div>
    )
  }
}

ItemsList.propTypes = {
  dispatch: PropTypes.func,
  items: PropTypes.array,
  location: PropTypes.object
}

function mapStateToProps (state) {
  return {
    items: state.items
  }
}

export default withRouter(connect(mapStateToProps)(ItemsList))
