import { Link, useNavigate } from 'react-router-dom'
import CreateTask from './CreateTask'
import TaskEdit from './TaskEdit'
import TaskList from './TaskList'



const Nav = () => {
  const navigate = useNavigate()



  return (
    <nav>
      <ul>
       
        <li>
          <Link to='/tasks'>Tasks</Link>
        </li>
        <li>
          <Link to='/tasks/new'>Create A Task </Link>
        </li>
        <li>
          <Link to='/tasks/:id/edit'>Edit A Task </Link>
        </li>

        <li>
          <Link to='/tasks/:id'>Delete A Task </Link>
        </li>
      
          
        
     
     
      </ul>
    </nav>
  )
}

export default Nav

