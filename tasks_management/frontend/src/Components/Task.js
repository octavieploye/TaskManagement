
import '../Style/task.css'
import { Link } from 'react-router-dom'
import { deleteTask, fetchTask } from '../helpers/api'

const Task = ({  id,title, categorie, description, status, completed}) => {
    console.log('Task title', title)
  
    return (

      <div className='Task'>
{/*         
            <ul>

          <li> Title: {title} </li>
          <li> Categorie: {categorie} </li>
          <li> Description: {description}  </li>
          <li> Due: {due_date_time} </li> */}
          {/* <li> Created: {date_time_set}</li>
          <li> Completed: {completed}</li>
          </ul>  */}
         
        
      <h2>
        <Link to={`/tasks/${id}`}> {title}</Link>
      </h2>
      <p> {description} </p>
      <p>
        {' '}
        {categorie}, {status}, {completed}
      </p>
     
      </div>
      
    )
  }
  
  export default Task