import { Trash2 } from 'lucide-react'
import { Checkbox } from './Checkbox'
interface TaskProps {
  id: string
  isActive?: boolean
  descricao: string
  onChangeTaskCompleted(id: string): void
  onDeleteTask(id: string): void
}
export function Task({
  isActive = false,
  descricao,
  onChangeTaskCompleted,
  id,
  onDeleteTask,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className="flex min-h-[72px] w-full  items-start justify-between gap-3 rounded-lg border border-solid border-base-gray-400 bg-base-gray-500 p-4">
      <Checkbox
        isActive={isActive}
        onChangeTaskCompleted={onChangeTaskCompleted}
        id={id}
      />
      <div
        className={`flex-1  font-inter text-sm font-normal  ${isActive ? 'text-base-gray-300 line-through' : 'text-base-gray-100'}`}
      >
        {descricao}
      </div>
      <div className="cursor-pointer rounded-lg" onClick={handleDeleteTask}>
        <Trash2 className="h-7 w-7 cursor-pointer rounded-lg p-1 text-base-gray-300 hover:bg-base-gray-400 hover:text-danger" />
      </div>
    </div>
  )
}
