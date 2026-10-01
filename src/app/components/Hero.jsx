import Image from "next/image";
import mypic from "../img/mypic.jpg";
export default function Hero() {
  return (
    <section className="min-h-screen pt-20 ">
      <div className="container flex min-h-[calc(100vh-80px)] items-center">
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-lg text-primary-light">Hi, I&apos;m</p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Yasaman <span className="gradient-text">Karbalaii</span>
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-text-primary">
              Front-End Developer
            </h2>

            <p className="mt-6 max-w-xl text-lg text-text-secondary">
              I build modern, responsive and user-friendly web applications with
              React and Next.js.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Projects
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-primary bg-surface md:h-96 md:w-96">
              <Image className="object-cover" src={mypic} alt="My Photo" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
