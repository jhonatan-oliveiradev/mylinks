import { Link } from "react-router-dom"

export function ErrorPage() {
  return (
    <div className="flex w-full justify-center items-center flex-col text-zinc-200 min-h-screen">
      <h2 className="text-6xl mb-2 font-bold">404</h2>
      <h1 className="font-bold text-4xl mb-4">Página não encontrada.</h1>
      <p className="italic text-xl mb-8">Parece que você se perdeu...</p>
      <Link className="bg-blue-800 py-1 px-4 rounded-md hover:bg-blue-900 transition-all" to="/">Voltar para a página inicial</Link>
    </div>
  )
}