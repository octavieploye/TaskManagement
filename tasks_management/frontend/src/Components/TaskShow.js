import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Task from './Task'
import { deleteTask, fetchTask } from '../helpers/api'

const TaskShow = () => {
  const [task, setTask] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchTask(id).then(setTask)
  }, [id])

  const handleDeleteClick = () => {
    deleteTask(id)
      .then((data) => {
        console.log(data)
        // Redirect the user after a successful delete
        navigate('/tasks')
      })
      .catch((err) => {
        console.error(err)
        alert(err)
      })
  }

  return (
      
    <section>
      <h1>{task.title}</h1>
      <p>
        <Link to={`/tasks/${id}/edit`}>Edit this task!</Link>
        <button onClick={handleDeleteClick}>Delete this task!</button>
      </p>
      <Task {...task} isCompleted={true} />
    </section>
    
  )
}

export default TaskShow