import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ToDo = ({task, toggleComplete, deleteTodo, editToDo}) => {
  return (
    <div className='Todo'>
        <p onClick={(task) => toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editToDo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}
