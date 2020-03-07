import { all, takeLatest, put } from 'redux-saga/effects'
import { getUrl } from './request'

function * getItems (action) {
  try {
    const result = yield getUrl(`${process.env.BACKEND_URL}/v1/items?character=${action.character}`)
    yield put({ type: 'GET_ITEMS_SUCCESS', items: result.data })
  } catch (e) {
    yield put({ type: 'ADD_ERROR', error: e.response.data })
  }
}

function * getCharacters () {
  try {
    const result = yield getUrl(`${process.env.BACKEND_URL}/v1/characters`)
    yield put({ type: 'GET_CHARACTERS_SUCCESS', characters: result.data })
  } catch (e) {
    yield put({ type: 'ADD_ERROR', error: e.response.data })
  }
}

export default function * rootSaga () {
  yield takeLatest('GET_ITEMS', getItems)
  yield takeLatest('GET_CHARACTERS', getCharacters)
  yield all([])
}
