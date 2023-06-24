import { useState } from "react"
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { BiLinkAlt } from "react-icons/bi";
import { FiTrash } from "react-icons/fi"

export function Admin() {
  const [nameInput, setNameInput] = useState("")
  const [urlInput, setUrlInput] = useState("")
  const [textColorInput, setTextColorInput] = useState("#faf0e1")
  const [bgColorInput, setBgColorInput] = useState("#27272a")

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-2">
      <Header />
      
      <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
        <label className="text-zinc-400 font-semibold my-2">Nome do Link</label>
        <Input
          placeholder="Digite o nome do link..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="text-zinc-400 font-semibold my-2">URL do Link</label>
        <Input
          type="url"
          placeholder="Digite a URL do link..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex gap-3">
            <label className="text-zinc-400 font-semibold my-2">Fundo do link</label>
            <input
              className="rounded-md"
              type="color"
              value={bgColorInput}
              onChange={(e) => setBgColorInput(e.target.value)}
            />
          </div>

            <div className="flex gap-3">
            <label className="text-zinc-400 font-semibold my-2">Cor do link</label>
            <input
              className="rounded-md"
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="flex items-center justify-center flex-col mb-7 p-1 border-zinc-200/25 border rounded-md">
            <label className="text-zinc-400 font-semibold my-2">Prévia:</label>
            <article
              className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
              style={{ backgroundColor: bgColorInput, color: textColorInput }}
            >
              <p className="font-bold">{nameInput}</p>
            </article>
          </div>
        )}

        <button
          className={`mb-7 h-9 bg-blue-700 border-0 rounded-md font-semibold 
                    text-zinc-50 hover:bg-blue-800 transition-all`}
          type="submit"
        ><span className="flex flex-row items-center justify-center gap-3">Adicionar Link <BiLinkAlt size={18} /></span>
        </button>

      </form>

      <h2 className="font-bold text-zinc-200 text-2xl">Meus Links</h2>
      <article
        className="flex items-center justify-between w-11/12 max-w-xl rounded-md py-3 px-2 mb-2"
        style={{backgroundColor: "#2563eb", color: "#fff"}}
      >
        <p className="font-bold">Canal do Youtube</p>
        <div>
          <button className="border border-dashed p-1 rounded">
            <FiTrash className="text-zinc-200 transition-all hover:text-red-500" size={18} />
          </button>
        </div>
      </article>
    </div>
  )
}