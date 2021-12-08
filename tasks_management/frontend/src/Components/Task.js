
import '../Style/task.css'

const Task = ({ title, categorie, description, status, due_date_time, date_time_set, completed}) => {
    console.log('Task title', title)
  
    return (
        <div>

          <p> Task </p>
        

      <div className='Task'>
        <p>
            <ul>

          <li> Title: {title} </li>
          <li> Categorie: {categorie} </li>
          <li> Description: {description}  </li>
          <li> Due: {due_date_time} </li>
          <li> Created: {date_time_set}</li>
          <li> Completed: {completed}</li>
          </ul>
          {/* {status
            ? Object.values(status)
            .map((n) => status)
            .join('; ')
            : ` Your Task ${title} is ${status}`}
          . */}
        </p>
        <p>
          {title} {categorie} {status}
        </p>
        
      </div>
      </div>
    )
  }
  
  export default Task