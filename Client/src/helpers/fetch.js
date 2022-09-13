const baseUrl = 'http://localhost:4000/api'

export const trabajosApi = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}${endpoint}`

  // Opciones por defecto estan marcadas con un *
  if (method === 'GET') {
    return fetch(url)
  } else if (method === 'POST') {
    const response = fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

    return response
  } else if (method === 'PUT') {
    const response = fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

    return response
  }
}
