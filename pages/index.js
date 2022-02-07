import Head from "next/head";
import Card from "../src/components/Card";
import { GinoWorks } from "../helper/helper";
import Title from "../src/components/Title";
import Button from "../src/components/Button";
import Networks from "../src/components/Networks";
import Introduction from "../src/components/Introduction";

export default function Home() {
  console.log(GinoWorks);

  return (
    <div>
      <Head>
        <title>Portfolio Gino</title>
        <meta
          name="description"
          content="Gino Pietrobon (moonwatcher.dev) portfolio, programación, blog, tecnología, javascript, react"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <span>
          <Networks />
        </span>
        <div className="text-center m-6 mt-24">
          <h1 className="text-6xl font-extrabold text-dark pb-12">
            Portafolio De Gino
          </h1>

          <div className="flex flex-col mx-0 space-y-6">
            <a
              
              href="https://github.com/DevZeppelin/devzeppelin"
              rel="noreferrer"
              target="_blank"
            >
              <Button text="Link a mi Github" />
            </a>
            <a href="#works">
              <Button text="Mis trabajos realizados" />
            </a>
          </div>
        </div>

        <Introduction />

        <div className="p-12 text-center mt-32  text-white bg-gradient-to-tr from-green to-dark">
          <h3 className="text-2xl font-bold">
            ¡Te invito a conocer mis trabajos y proyectos realizados!
          </h3>
          <a href="#works">
            <p className="text-3xl mt-6">🔽</p>
          </a>
        </div>

        <div className="text-center mt-24" id="works">
          <Title name="Aplicaciones Web" />
          <div className="grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-12">
            {GinoWorks.apps.map((app) => (
              <Card
                key={app.name}
                name={app.name}
                src={app.src}
                alt={app.alt}
                text={app.text}
                code={app.code}
                url={app.url}
              />
            ))}
          </div>

          <Title name="Páginas web para empresas" />
          <div className="grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-12">
            {GinoWorks.empresas.map((empresa) => (
              <Card
                key={empresa.name}
                name={empresa.name}
                src={empresa.src}
                alt={empresa.alt}
                text={empresa.text}
                code={empresa.code}
                url={empresa.url}
              />
            ))}
          </div>

          <Title name="Proyectos personales" />
          <div className="grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-12">
            {GinoWorks.proyectos.map((proyecto) => (
              <Card
                key={proyecto.name}
                name={proyecto.name}
                src={proyecto.src}
                alt={proyecto.alt}
                text={proyecto.text}
                code={proyecto.code}
                url={proyecto.url}
              />
            ))}
          </div>

          <Title name="Mis primeros proyectos (antiguos)" />
          <div className="grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-12">
            {GinoWorks.proyectosOld.map((proyecto) => (
              <Card
                key={proyecto.name}
                name={proyecto.name}
                src={proyecto.src}
                alt={proyecto.alt}
                text={proyecto.text}
                code={proyecto.code}
                url={proyecto.url}
              />
            ))}
          </div>
        </div>
      </main>

      <div className="m-12 text-center mt-32 text-dark">
        <h3 className="text-2xl font-bold">
          ¡Gracias por recorrer mis trabajos! Para cualquier tipo de consulta no
          dudes en escribirme 😊
        </h3>
        <Networks />
      </div>

      <footer className="text-center bg-dark text-white mt-12">
        <a
          href="https://devzeppelin.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Moonwatcher 🐵
        </a>
      </footer>
    </div>
  );
}
