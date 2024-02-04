import { ButtonHTMLAttributes, ElementType } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon: ElementType
}

export function Button({ title, icon: Icon, ...props }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-lg bg-blue-dark p-4 text-base-gray-100 transition hover:bg-blue"
      {...props}
    >
      {title}
      <Icon className="h-4 w-4" />
    </button>
  )
}
