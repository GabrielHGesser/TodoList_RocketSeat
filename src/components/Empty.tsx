import Clipboard from '../assets/Clipboard.svg'

export function Empty() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg border-t border-t-base-gray-400 px-6 py-16">
      <img src={Clipboard} alt="Icone de uma prancheta" />
      <div>
        <p className="text-center text-base font-bold text-base-gray-300">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-center text-base font-normal text-base-gray-300">
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  )
}
