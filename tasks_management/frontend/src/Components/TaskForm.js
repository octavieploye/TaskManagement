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
        name='completed'
        type='checkbox'
       
        {...formInputProps}

      />
    </>
  )
}

export default TaskForm