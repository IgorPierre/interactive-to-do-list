import './App.css'

//Data
import TasksData from '../Data/TasksData'

//Icons
import { LiaTrashAlt } from 'react-icons/lia'
import { LuAlertTriangle } from 'react-icons/lu'
import { ImSearch } from 'react-icons/im'

//Components
import { FilterArea } from './components/FilterArea'
import { TaskContainer } from './components/TaskContainer'
import { TaskCard } from './components/TaskCard'
import { TaskForm } from './components/TaskForm'
import { InputBar } from './components/InputBar'
import SearchTask from './components/SearchTask'
import { Title } from './components/Title'
import { DefaultButton, FinishButton, TrashButton } from './components/Buttons/Buttons'

//Hooks
import { useState } from 'react'

function App() {

  const [text, setText] = useState("")

  const [search, setSearch] = useState('')

  const [tasks, setTasks] = useState([...TasksData])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!text) 
      return
    addTask(text)
    setText("")
  }

  const addTask = (text) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        isFinished: false,
      }
    ]
    setTasks(newTasks)

  } 
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

  return (
    <div className="container">
      <Title>Interactive To-Do List</Title>

      <TaskForm onSubmit={handleSubmit}>
        <InputBar 
          type="text" 
          placeholder='Nova tarefa' 
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <DefaultButton 
          type="submit"
          customContent="+"
          primary
        >ADICIONAR</DefaultButton>
      </TaskForm>

      <FilterArea>
        <ImSearch />
        <SearchTask search={search} setSearch={setSearch} />
      </FilterArea>

      <TaskContainer>
        {tasks
          .filter((task) => 
            task.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((task) =>
          (
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
          ))
        }

        {tasks.filter((task) => 
            task.text.toLowerCase().includes(search.toLowerCase())
          ).length === 0 && search != '' && (
          <div className='not-found-area'>
            <span><LuAlertTriangle/> Nenhuma task encontrada !!</span>
          </div>
        )}
      </TaskContainer>
    </div>
  )
}

export default App
