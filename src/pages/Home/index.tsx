import { Footer } from "../../components/Footer";


export function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <img
        className="w-32 h-32 rounded-full mt-20 border-2 border-purple-800"
        src="https://github.com/jhonatan-oliveiradev.png"
        alt="imagem de usuário"
      />
      <h1 className="md:text-4xl text-3xl font-bold text-zinc-50 mt-5">Jhonatan Oliveira</h1>
      <span className="text-zinc-500 font-bold my-5">Software Developer | Front-End Developer | UI/UX Designer</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-zinc-800 mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105">
          <a href="">
            <p className="text-base text-zinc-50 font-semibold md-text-lg">Instagram</p>
          </a>
        </section>
        <Footer />
      </main>
    </div>
  )
}