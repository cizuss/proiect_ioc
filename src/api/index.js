const apiURL = 'http://jsonplaceholder.typicode.com'

export function apiCall (method, path, data, opts) {
  opts = opts || {}
  opts.request = opts.request || {}

  const fetchOpts = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    json: true
  }

  if (data) {
    fetchOpts.body = JSON.stringify(data)
  }

  return fetch(apiURL + path, Object.assign({}, opts.request, fetchOpts))
    .then(response => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Can't ${method} ${path}: HTTP Error ${response.status}`)
      }
      return response.json()
    })
}
