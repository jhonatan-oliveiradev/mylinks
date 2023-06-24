import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { CgNametag } from "react-icons/cg"
import { useState, FormEvent } from "react"

import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../services/firebaseConnection";

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (email === '' || password === '') {
      alert("Preencha todos os campos!")
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("logado com sucesso!")
        navigate("/admin", {replace: true})
      })
      .catch((err) => {
        console.log(err)
        console.log("Erro ao fazer login.")
      })
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <CgNametag className={`text-7xl text-blue-500`} />
      <Link to="/" className="">
        <h1 className={`
          mt-11 text-zinc-50 mb-7 font-bold text-5xl
          `}
        >Tag<span
            className={`bg-gradient-to-r 
                      from-blue-300
                      to-blue-500
                      bg-clip-text
                      text-transparent`}
          >wise</span>
        </h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
        <button className={`h-9 bg-blue-700 border-0 rounded font-semibold 
                          text-zinc-50 hover:bg-blue-800 transition-all`}
          type="submit"
        >Acessar</button>
      </form>
    </div>
  )
}