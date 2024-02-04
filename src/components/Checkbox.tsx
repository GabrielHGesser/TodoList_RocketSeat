import { Check } from 'lucide-react'

interface CheckboxProps {
  isActive?: boolean
  onChangeTaskCompleted(id: string): void
  id: string
}

export function Checkbox({
  isActive = false,
  onChangeTaskCompleted,
  id,
}: CheckboxProps) {
  function changeTaskCompleted() {
    onChangeTaskCompleted(id)
  }

  return (
    <div
      className={`group relative z-10 h-6 w-6 cursor-pointer rounded-full border-2 border-solid  p-[3.25px] ${isActive ? 'border-transparent bg-purple-dark hover:bg-purple' : 'border-blue'}`}
      onClick={changeTaskCompleted}
    >
      <div
        className={` absolute bottom-0 left-0 right-0 top-0 z-0 flex h-5 w-5 items-center justify-center rounded-full ${isActive ? '' : 'group-hover:bg-blue-dark group-hover:opacity-35'}`}
      >
        {isActive ? (
          <Check className="mt-0.5 h-4 w-4  text-base-gray-100" />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
