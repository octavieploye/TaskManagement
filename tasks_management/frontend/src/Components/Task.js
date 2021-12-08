const Task = ({ title, categorie, description, status, due_date_time, date_time_set }) => {
    console.log('Task title', title)
  
    return (
      <div className='Task'>
        <p>
          {title} {categorie} {description}  {due_date_time} {date_time_set}
          {title
            ? Object.values(title)
                .map((n) => title)
                .join('; ')
            : `${description}`}
          .
        </p>
        <p>
          {title} {categorie} {status}
        </p>
        
      </div>
    )
  }
  
  export default Task