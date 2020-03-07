import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: false }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  componentDidMount () {
    this.props.dispatch({ type: 'GET_CHARACTERS' })
  }

  render () {
    const { characters } = this.props
    return (
      <header className='header has-background-grey-light'>
        <div className='container'>
          <nav className='navbar has-background-grey-light'>
            <div className="navbar-brand">
              <Link className="navbar-item" to="/"><h1>BloodThirst Priest</h1></Link>
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                data-target="navbar" onClick={() => this.toggleMenu()}>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
              </a>
            </div>
            <div id="navbar" className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
              <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">
                    Historique
                  </div>
                  <div className="navbar-dropdown">

                    {characters.map((character,index) => {
                      return (
                        <Link key={index} to={`/history?character=${character.name}`} className="navbar-item"> {character.name}</Link>
                      )
                    })}
                  </div>
                </div>

              </div>
              <div className="navbar-end">
                <Link to="#" className="navbar-item">WIP</Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
Header.propTypes = {
  dispatch: PropTypes.func,
  characters: PropTypes.array
}

function mapStateToProps (state) {
  return {
    characters: state.characters
  }
}
export default connect(mapStateToProps)(Header)
