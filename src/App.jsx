import './App.css'

import { LiaTrashAlt } from 'react-icons/lia'

import { TaskContainer } from './components/TaskContainer'
import { useState } from 'react'
import { TaskCard } from './components/TaskCard'
import { TrashButton } from './components/Buttons/TrashButton'
import { FinishButton } from './components/Buttons/FinishButton'
import { TaskForm } from './components/TaskForm'
import { AddTaskButton } from './components/Buttons/AddTaskButton'

function App() {

  const finishedTask = (id) => {
    const newTasks = [...tasks]
    newTasks.map((task) => task.id === id ? task.isFinished = !task.isFinished : task)
    setTasks(newTasks)
  }

  const removeTask = (id) => {
    const newTasks = [...tasks]
    const filteredTasks = newTasks.filter(task => task.id !== id ? task : null)
    setTasks(filteredTasks)
  }

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Tirar o lixo",
      isFinished: false,
    },
    {
      id: 2,
      text: "Comprar pão",
      isFinished: true,
    },
  ])
  
  return (
    <>
      <TaskContainer>
        <TaskForm>
          <input type="text" placeholder='Nova tarefa'/>
          <AddTaskButton type="submit">ADICIONAR</AddTaskButton>
        </TaskForm>
        {tasks.map((task) => (
          <TaskCard key={task.id}>
            <div className='div-aux'>
              <FinishButton 
                onClick={() => finishedTask(task.id)}
                className={task.isFinished ? 'finished' : ''}
              >
              </FinishButton>
              <span style={{ textDecoration: task.isFinished == true ? 'line-through' : 'none' }} >
                  {task.text}
              </span>
            </div>
            <TrashButton onClick={() => removeTask(task.id)}>
              <LiaTrashAlt />
            </TrashButton>
          </TaskCard>
        ))}
      </TaskContainer>
    </>
  )
}

export default App
