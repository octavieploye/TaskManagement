

import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAxiosRequestConfig } from '../helpers/api'
import TaskForm from './TaskForm'

const CreateTask = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    categorie: '',
    due_date_time: '',
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const navigate= useNavigate()

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const config = getAxiosRequestConfig('/tasks/', data)

    try {
      const response = await axios(config).catch(handleError)

      console.log(response.data)
      setIsError(false)
      navigate(`/tasks/${response.data._id}`)
    } catch (err) {}
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Create a Task </h2>
        <TaskForm formInputProps={formInputProps} />
        <div>
          <input type='submit' value='Create a Task' />
        </div>
        {isError ? (
          <div className='error'>
            <p>Error. Please try again.</p>
          </div>
        ) : (
          <></>
        )}
      </form>
    </section>
  )
}

export default CreateTask

