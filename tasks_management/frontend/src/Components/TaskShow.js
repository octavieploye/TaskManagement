import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Task from './Task'
import { deleteTask, fetchTask } from '../helpers/api'
import TaskInfo from './TaskInfo'

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
      <h1>{Task}</h1>
      
      <p>
        <Link to={`/tasks/${id}/edit`}>Edit</Link>
        <button onClick={handleDeleteClick}>Delete</button>
      </p>
      <Task {...task} isCompleted={true} />
      

</section>
    
  )
}

export default TaskShow