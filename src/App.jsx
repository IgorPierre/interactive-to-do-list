import './App.css'

import { LiaTrashAlt } from 'react-icons/lia'

import { TaskContainer } from './components/TaskContainer'
import { useState } from 'react'
import { TaskCard } from './components/TaskCard'
import { TrashButton } from './components/Buttons/TrashButton'

function App() {

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

  const [checked, setChecked] = useState("checked");

  const handleCheckboxChange = (value) => {
    return (!value);
  };

  return (
    <>
      <TaskContainer>
        {tasks.map((task) => (
          <TaskCard>
            <label htmlFor="">
              <input 
                type="checkbox"
                checked={checked}
              />
              <span className={task.isFinished === true ? "is-finished" : ""} >{task.text}</span>
            </label>
            <TrashButton>
              <LiaTrashAlt />
            </TrashButton>
          </TaskCard>
        ))}
      </TaskContainer>
    </>
  )
}

export default App
