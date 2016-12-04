const apiURL = 'https://snagbe.herokuapp.com/api/v1/'

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
      fetchOpts.headers.Authorization = `Token token=${token}`
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
  return await apiCall(null, 'POST', '/login', { username, password })
}

export async function apiGetDashboardIssues (getState) {
  return await apiCall(getState, 'GET', '/dashboard_issues')
}

export async function apiGetProjects (getState) {
  return await apiCall(getState, 'GET', '/projects')
}

export async function apiGetProjectIssues (getState, projectId) {
  return await apiCall(getState, 'GET', `/projects/${projectId}/issues`)
}

export async function apiGetIssue (getState, issueId) {
  // return await apiCall(getState, 'GET', `/issue/${issueId}`, { username, password })
  await delay(1000) // Fake network call
  return mockIssues.find(issue => issue.id === issueId)
}
