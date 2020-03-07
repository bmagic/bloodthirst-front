import axios from 'axios'

export async function getUrl (url) {
  const headers = {}

  const result = await axios({
    url: url,
    headers
  })
  return result
}

export async function postUrl (url, body) {
  const headers = {}

  const result = await axios({
    url: url,
    method: 'post',
    data: body,
    headers
  })
  return result
}

export async function deleteUrl (url) {
  const headers = {}

  const result = await axios({
    url: url,
    method: 'delete',
    headers
  })
  return result
}
