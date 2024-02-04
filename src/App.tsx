import { PlusCircle } from 'lucide-react'
import imageLogo from './assets/logo.svg'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Empty } from './components/Empty'
import { FormEvent, useState, ChangeEvent } from 'react'
import { Task } from './components/Task'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isActive: false,
    },
  ])
  const [newTaskDescription, setNewTaskDescription] = useState('')

  const isTaskEmpty = tasks.length === 0

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        description: newTaskDescription,
        isActive: false,
      },
    ])

    setNewTaskDescription('')
  }

  function handleCreateNewTaskDescription(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setNewTaskDescription(event.target.value)
  }

  function deleteTask(id: string) {
    const newTask = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(newTask)
  }

  function handleChangeTaskCompleted(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isActive: !task.isActive,
        }
      }
      return task
    })

    setTasks(newTasks)
  }

  return (
    <div className="min-h-screen bg-base-gray-600">
      <header className="flex h-[200px] w-full items-center justify-center bg-base-gray-700">
        <img className="w-[126px]" src={imageLogo} alt="" />
      </header>
      <main className="mx-auto flex max-w-[736px] flex-col gap-16">
        <form
          onSubmit={handleCreateNewTask}
          className="-mt-7 flex max-h-14 w-full items-center justify-between gap-2"
        >
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTaskDescription}
            onChange={handleCreateNewTaskDescription}
            required
          />
          <Button title="Criar" icon={PlusCircle} type="submit" />
        </form>
        <div className="flex w-full flex-col gap-6">
          <header className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-4">
              <p className="font-inter text-sm font-bold text-blue">
                Tarefas criadas
              </p>
              <span className="rounded-full bg-base-gray-400 px-2 py-0.5 font-inter text-xs font-bold  text-gray-200">
                {tasks.length}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="font-inter text-sm font-bold text-purple">
                Concluidas
              </p>
              <span className="rounded-full bg-base-gray-400 px-2 py-0.5 font-inter text-xs font-bold  text-gray-200">
                {
                  tasks.filter((task) => {
                    return task.isActive === true
                  }).length
                }
                <span> de </span>
                {tasks.length}
              </span>
            </div>
          </header>
          <main>
            {isTaskEmpty ? (
              <Empty />
            ) : (
              <div className="flex max-h-[500px] flex-col gap-3 overflow-auto">
                {tasks.map((task) => {
                  return (
                    <Task
                      key={task.id}
                      id={task.id}
                      isActive={task.isActive}
                      descricao={task.description}
                      onChangeTaskCompleted={handleChangeTaskCompleted}
                      onDeleteTask={deleteTask}
                    />
                  )
                })}
              </div>
            )}
          </main>
        </div>
      </main>
    </div>
  )
}

export default App
