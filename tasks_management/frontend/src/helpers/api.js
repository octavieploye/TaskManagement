import axios from 'axios'

const baseUrl = 'http://localhost:8000/api'



export const fetchTasks= async () => {
  const config = {
    method: 'get',
    url: `${baseUrl}/tasks`,
    headers: {},
  }

  const response = await axios(config)
  return response.data
}

export const fetchTask = async (id) => {
  const config = {
    method: 'get',
    url: `${baseUrl}/tasks/${id}`,
    headers: {},
  }

  const response = await axios(config)
  return response.data
}

export const deleteTask = async (id) => {
  const config = {
    method: 'delete',
    url: `${baseUrl}/tasks/${id}`,
   
  }

  const response = await axios(config)
  return response.data
}



const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data)

  const response = await axios(config)
  return response.data
}

export const getAxiosRequestConfig = (requestUrl, data, method = 'post') => {
  // Config object – tells us everything special about the request
  const config = {
    method,
    url: `${baseUrl}${requestUrl}`,
    
    // The "payload" or the "body" of the request: the important info we send as JSON
    data,
  }
  return config
}

