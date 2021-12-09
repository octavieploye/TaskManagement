import { Link } from 'react-router-dom'
import TaskList from './TaskList'

const TaskInfo = ({
  id,
title,
description,
categorie,
status,
completed,

}) => {
  
  return (
    <>
      <div>
        <Link to="/">Click here to see all Tasks </Link>
      </div>
      <div className="task">
        <h2>{title}</h2>
        <p>
          {' '}
          {categorie} {status}
        </p>

        <p> {completed} </p>

        
      </div>
    </>
  )
}

export default TaskInfo