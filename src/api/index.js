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

const mockIssues = [{
  id: 0,
  issueCode: 1,
  name: 'First issue',
  project: 0,
  priority: 0,
  storyPoints: 5,
  sprint: 1,
  label: 'Some Label',
  description: 'Very smart description indeed',
  status: 'open',
  environment: 'Some Environment',
  asignee: null,
  reporter: null,
  creationDate: (Date.now() / 1000) - 60 * 60 * 24
}, {
  id: 1,
  issueCode: 2,
  name: 'Second issue',
  project: 0,
  priority: 0,
  storyPoints: 3,
  sprint: 1,
  label: 'Some Label',
  description: 'Even smarter description',
  status: 'inProgress',
  environment: 'Some Environment',
  asignee: null,
  reporter: null,
  creationDate: (Date.now() / 1000) - 60 * 60 * 48
}, {
  id: 2,
  issueCode: 1,
  name: 'First issue on second project',
  project: 1,
  priority: 0,
  storyPoints: 4,
  sprint: 1,
  label: 'Some Label',
  description: 'Very smart but different description',
  status: 'closed',
  environment: 'Some Environment',
  asignee: null,
  reporter: null,
  creationDate: (Date.now() / 1000) - 60 * 60 * 72
}]

export async function apiGetDashboardIssues (getState) {
  // return await apiCall(getState, 'GET', '/dashboard_issues', { username, password })
  await delay(1000) // Fake network call
  return mockIssues
}

export async function apiGetProjectIssues (getState, projectId) {
  // return await apiCall(getState, 'GET', `/projects/${projectId}/issues`, { username, password })
  await delay(1000) // Fake network call
  return mockIssues.filter(issue => issue.project === projectId)
}

export async function apiGetIssue (getState, issueId) {
  // return await apiCall(getState, 'GET', `/issue/${issueId}`, { username, password })
  await delay(1000) // Fake network call
  return mockIssues.find(issue => issue.id === issueId)
}
