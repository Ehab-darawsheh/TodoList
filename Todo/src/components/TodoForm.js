import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [val,setVal] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(val)
    setVal("")
  }
  return (
    
    <form className='TodoForm' onSubmit={handleSubmit}>
      <h1 className='titleForm'>Todo List</h1>
      <input type='text'  className='todo-input' value={val}
       placeholder='What is the task today'
       onChange={(e) => setVal(e.target.value)}
       />
       <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
