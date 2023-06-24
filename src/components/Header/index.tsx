import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
import { auth } from "../../services/firebaseConnection"
import { signOut } from "firebase/auth"

export function Header() {

  async function handleLogout() {
    await signOut(auth)
  }

  return (
    <header className="w-full max-w-2xl mt-4 px-1">
      <nav className="w-full bg-zinc-200 h-12 flex items-center justify-between rounded-md px-3">
        <div className="flex gap-4 font-medium">
          <Link className="hover:text-blue-800 transition-all" to="/">
            Home
          </Link>
          <Link className="hover:text-blue-800 transition-all" to="/admin">
            Admin
          </Link>
          <Link className="hover:text-blue-800 transition-all" to="/admin/social">
            Redes Sociais
          </Link>
        </div>

        <button onClick={handleLogout}>
           <BiLogOut size={28} className="text-red-500 hover:text-red-600 transition-all" />
        </button>
      </nav>
    </header>
  )
}