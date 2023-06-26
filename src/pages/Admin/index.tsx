import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";
import { BiLinkAlt } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { db } from "../../services/firebaseConnection";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  textColor: string;
  bgColor: string;
  created: Date;
  updated?: Date | null; // optional field for update operations only!
}

export function Admin() {
  const [nameInput, setNameInput] = useState("")
  const [urlInput, setUrlInput] = useState("")
  const [textColorInput, setTextColorInput] = useState("#faf0e1")
  const [bgColorInput, setBgColorInput] = useState("#27272a")
  const [links, setLinks] = useState<LinkProps[]>([])

  useEffect(() => {
    const linksRef = collection(db, "links")
    const queryRef = query(linksRef, orderBy("created", "asc"))

    const unsub = onSnapshot(queryRef, (snapshot) => {
      let lista = [] as LinkProps[];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          textColor: doc.data().textColor,
          bgColor: doc.data().bgColor,
          created: doc.data().created
        })
      })

      setLinks(lista)
    })

    return () => unsub();
  }, [])

  async function handleRegister(e: FormEvent) {
    e.preventDefault()

    if (nameInput === "" || urlInput === "") {
      alert("Preencha todos os campos!")
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      textColor: textColorInput,
      bgColor: bgColorInput,
      created: new Date()
    })
      .then(() => {
        setNameInput("")
        setUrlInput("")
        setTextColorInput("#faf0e1")
        setBgColorInput("#27272a")
        console.log("CADASTRADO COM SUCESSO!")
      })
      .catch((err) => {
        console.log("ERRO AO CADASTRAR NO BANCO." + err)
      })
  }

  async function handleDeleteLink(id: string) {
    const docRef = doc(db, "links", id)
    await deleteDoc(docRef)
      .then(() => alert(`Item ${id} removido com sucesso!`))
      .catch((err) => alert(`Erro ao remover link: ${err}`))
  }

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-2">
      <Header />
      
      <form
        className="flex flex-col mt-8 mb-3 w-full max-w-xl"
        onSubmit={handleRegister}
      >
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

      <h2 className="font-bold text-zinc-200 text-2xl mb-4">Meus Links</h2>
      {links.map((link) => (
        <article
          key={link.id}
          className="flex items-center justify-between w-11/12 max-w-xl rounded-md py-3 px-2 mb-2"
          style={{backgroundColor: link.bgColor, color: link.textColor}}
        >
          <p className="font-bold">{link.name}</p>
          <div>
            <button
              className="border border-dashed p-1 rounded"
              onClick={() => handleDeleteLink(link.id)}
            >
              <FiTrash className="text-zinc-200 transition-all hover:text-red-500" size={18} />
            </button>
          </div>
        </article>
     ))}
    </div>
  )
}