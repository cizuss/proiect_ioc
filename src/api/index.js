const apiURL = 'http://jsonplaceholder.typicode.com'

export async function apiCall (getState, method, path, data, opts) {
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

  if (getState) {
    const token = getState().user.token
    if (token) {
      fetchOpts.headers.Authorization = `Bearer ${token}`
    }
  }

  const response = await fetch(apiURL + path, Object.assign({}, opts.request, fetchOpts))

  if (response.status < 200 || response.status >= 300) {
    let errorMessage = `Can't ${method} ${path}: HTTP Error ${response.status}`
    try {
      errorMessage = (await response.json()).errorMessage
    } catch (ex) {}
    throw new Error(errorMessage)
  }

  return await response.json()
}

function delay (duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}

export async function apiLogin (username, password) {
  // return await apiCall(null, 'POST', '/login', { username, password })
  await delay(1000) // Fake network call

  if (username !== 'john') {
    throw new Error('Only john can login')
  }

  return {
    token: 'thisistotallyavalidtoken',
    user: {
      id: 1,
      name: 'John Doe',
      username,
      role: 2
    }
  }
}
