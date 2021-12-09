import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { fetchTask, getAxiosRequestConfig } from '../helpers/api'
import TaskForm from './TaskForm'
import Task from './Task'

const TaskEdit = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    categorie: '',
    due_date_time: '',
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchTask(id).then(setTask)
  }, [id])

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const config = getAxiosRequestConfig(`/tasks/${id}`, task, 'put')

    try {
      const response = await axios(config).catch(handleError)

      console.log(response.data)
      setIsError(false)
      navigate(`/tasks/${response.data._id}`)
    } catch (err) {}
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setTask({
      ...task,
      [name]: value,
    })
  }

  const goBack = () => {
    navigate.goBack()
  }

  const formInputProps = { data: task, errorInfo, handleFormChange }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Edit {Task.title}</h1>
        <TaskForm formInputProps={formInputProps} />
        <div>
          <input type='submit' value='Edit Task' />
        </div>
        <div>
          <input type='button' onClick={goBack} value='Cancel' />
        </div>
        {isError ? (
          <div className='error'>
            <p>Error: {errorInfo.message}. Please try again.</p>
          </div>
        ) : (
          <></>
        )}
      </form>
    </section>
  )
}

export default TaskEdit