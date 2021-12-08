import React, { Component } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Task from './Task'

const TaskList = () => {
    const [tasks, setTasks] =useState([])

     useEffect(() => {
        async function getTasksFromApi() {
            const response = await axios.get('http://localhost:8000/api/tasks/')
            console.log('got tasks', response.data)
            setTasks(response.data)
        }
        getTasksFromApi()
    },[])
    return (
        <div className='TaskList'>
{tasks.map((task) => (
    <Task {...task} />
))}

        </div>
    )
}
export default TaskList