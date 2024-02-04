import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-solid border-base-gray-700 bg-base-gray-500 p-4 text-base-gray-100
       placeholder:text-base-gray-300 hover:border-purple-dark focus:border-purple-dark"
    />
  )
}
