import React from 'react'
import FormInput from './FormInput'

const TaskForm = ({ formInputProps }) => {
  return (
    <>
      <FormInput
        name='title'
        type='text'
        placeholder='Task Title'
        {...formInputProps}

      />
      <FormInput
        name='description'
        type='text'
        placeholder='Task Description'
        {...formInputProps}

      />

<FormInput
        name='categorie'
        type='text'
        placeholder='Task Categorie'
        {...formInputProps}

      />


<FormInput
        name='status'
        type='text'
        placeholder='Task status'
        {...formInputProps}

      />
{/* <FormInput
        name='due_time_set'
        type='date'
        placeholder='Enter the Due Date'
        {...formInputProps}

      /> */}
      {/* <FormInput
    //     name='completed'
    //     type='checkbox'
       
    //     {...formInputProps}

    //   /> */}
    </>
  )
}

export default TaskForm