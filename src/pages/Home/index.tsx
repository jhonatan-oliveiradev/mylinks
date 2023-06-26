import { db } from "../../services/firebaseConnection";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { LinkProps } from "../../interfaces/LinkProps";

import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

export function Home() {
  const [links, setLinks] = useState<LinkProps[]>([])

  useEffect(() => {
    async function loadLinks() {
      const linksRef = collection(db, "links")
      const queryRef = query(linksRef, orderBy("created", "asc"))

      getDocs(queryRef).then((snapshot) => {
        let lista = [] as LinkProps[]

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bgColor: doc.data().bgColor,
            textColor: doc.data().textColor,
          })
        })

        setLinks(lista)
      }) 
    }
    loadLinks()
  }, [])

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">

      <div className="flex items-center justify-end w-full mr-10 mt-2">
        <Link to="/login">
          <BiLogIn size={24} className="text-blue-500" />
        </Link>
      </div>

      <img
        className="w-32 h-32 rounded-full mt-20 border-2 border-purple-800"
        src="https://github.com/jhonatan-oliveiradev.png"
        alt="imagem de usuário"
      />
      <h1 className="md:text-4xl text-3xl font-bold text-zinc-50 mt-5">Jhonatan Oliveira</h1>
      <span className="text-zinc-500 font-bold my-5">Software Developer | Front-End Developer | UI/UX Designer</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {links.map((link) => (
          <section
            key={link.id}
            style={{backgroundColor: link.bgColor}}
            className="bg-zinc-800 mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105"
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <p
                style={{color: link.textColor}}
                className="text-base text-zinc-50 font-semibold md-text-lg"
              >
                {link.name}
              </p>
            </a>
          </section>
       ))}
        <Footer />
      </main>
    </div>
  )
}