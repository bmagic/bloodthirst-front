const initialState = {
  errors: [],
  characters: [],
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return {
        ...state,
        errors: [...state.errors, action.error]
      }
    case 'CLEAR_ERRORS':
      return {
        ...state,
        errors: []
      }
    case 'GET_ITEMS_SUCCESS':
      return {
        ...state,
        items: action.items
      }
    case 'GET_CHARACTERS_SUCCESS':
      return {
        ...state,
        characters: action.characters
      }
    default:
      return state
  }
}

export default reducer
