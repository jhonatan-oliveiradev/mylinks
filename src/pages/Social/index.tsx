import { doc, getDoc, setDoc } from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { db } from "../../services/firebaseConnection";

export function Social() {
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [youtube, setYoutube] = useState("")
  const [twitter, setTwitter] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [github, setGithub] = useState("")
  const [twitch, setTwitch] = useState("")
  const [tiktok, setTiktok] = useState("")
  const [spotify, setSpotify] = useState("")
  const [behance, setBehance] = useState("")
  const [dribbble, setDribbble] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [telegram, setTelegram] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link")
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook)
          setInstagram(snapshot.data()?.instagram)
          setYoutube(snapshot.data()?.youtube)
          setTwitter(snapshot.data()?.twitter)
          setLinkedin(snapshot.data()?.linkedin)
          setGithub(snapshot.data()?.github)
          setTwitch(snapshot.data()?.twitch)
          setTiktok(snapshot.data()?.tiktok)
          setSpotify(snapshot.data()?.spotify)
          setBehance(snapshot.data()?.behance)
          setDribbble(snapshot.data()?.dribbble)
          setWhatsapp(snapshot.data()?.whatsapp)
          setTelegram(snapshot.data()?.telegram)
          setEmail(snapshot.data()?.email)
          setPhone(snapshot.data()?.phone)
        }
      })
    }

    loadLinks()
  }, [])

  function handleRegister(e: FormEvent) {
    e.preventDefault()

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
      twitter: twitter,
      linkedin: linkedin,
      github: github,
      twitch: twitch,
      tiktok: tiktok,
      spotify: spotify,
      behance: behance,
      dribbble: dribbble,
      whatsapp: whatsapp,
      telegram: telegram,
      email: email,
      phone: phone
    })
      .then(() => {
        console.log("Cadastrados com sucesso!")
      })
      .catch((err) => {
        console.log("Erro ao cadastrar." + err)
      })
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <h1 className="text-zinc-50 text-xl font-medium mt-8 mb-4">Minhas Redes Sociais</h1>

      <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
        <label className="text-zinc-400 font-medium my-2">Link do Facebook</label>
        <Input
          placeholder="Digite o link do Facebook..."
          type="url"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        
        <label className="text-zinc-400 font-medium my-2">Link do Instagram</label>
        <Input
          placeholder="Digite o link do Instagram..."
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        
        <label className="text-zinc-400 font-medium my-2">Link do Youtube</label>
        <Input
          placeholder="Digite o link do Youtube..."
          type="url"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do Twitter</label>
        <Input
          placeholder="Digite o link do Twitter..."
          type="url"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do LinkedIn</label>
        <Input
          placeholder="Digite o link do LinkedIn..."
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do GitHub</label>
        <Input
          placeholder="Digite o link do GitHub..."
          type="url"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do Twitch</label>
        <Input
          placeholder="Digite o link do Twitch..."
          type="url"
          value={twitch}
          onChange={(e) => setTwitch(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do TikTok</label>
        <Input
          placeholder="Digite o link do TikTok..."
          type="url"
          value={tiktok}
          onChange={(e) => setTiktok(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do Spotify</label>
        <Input
          placeholder="Digite o link do Spotify..."
          type="url"
          value={spotify}
          onChange={(e) => setSpotify(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do Behance</label>
        <Input
          placeholder="Digite o link do Behance..."
          type="url"
          value={behance}
          onChange={(e) => setBehance(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do Dribbble</label>
        <Input
          placeholder="Digite o link do Dribbble..."
          type="url"
          value={dribbble}
          onChange={(e) => setDribbble(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do WhatsApp</label>
        <Input
          placeholder="Digite o link do WhatsApp..."
          type="url"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do Telegram</label>
        <Input
          placeholder="Digite o link do Telegram..."
          type="url"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do E-mail</label>
        <Input
          placeholder="Digite o link do E-mail..."
          type="url"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-zinc-400 font-medium my-2">Link do Telefone</label>
        <Input
          placeholder="Digite o link do Telefone..."
          type="url"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
         className={`my-7 h-9 bg-blue-700 border-0 rounded-md font-semibold 
                    text-zinc-50 hover:bg-blue-800 transition-all`}
          type="submit">
          Salvar
        </button>
      </form>
    </div>
  )
}