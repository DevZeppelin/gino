import React from "react";

const Introduction = () => {
  return (
    <div className="text-center text-lg max-w-7xl px-6 md:px-16 mx-auto mt-16 font-medium grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-2">
      <div>
        <img src="../icons/me.png" className="mx-auto" />

        <p className="p-6">
          ¡Hola! Mi nombre es <strong>Gino Pietrobon</strong>, decidía que
          quería ser programador en noviembre de 2019, ¡y no he parado de
          aprender!
        </p>
      </div>
      <div>
        <img src="../icons/js.png" className="mx-auto" />
        <p className="p-6">
          Primero elegí a <strong>JavaScript</strong> como mi lenguaje de
          batalla, aunque no me molestarìa migrar y aprender cualquier otro
          lenguaje
        </p>
      </div>
      <div>
        <img src="../icons/react.png" className="mx-auto" />
        <p className="p-6">
          Actualmente trabajo con <strong>React.js</strong> (y su framework
          Next.js) construyéndo sitios y aplicaciones web de altísima
          perfomance.
        </p>
      </div>
      <div>
        <img src="../icons/design.png" className="mx-auto" />
        <p className="p-6">
          Para el diseño de mis webs utilizo <strong>Tailwind CSS</strong>.
          Disfruto editando imágenes con <strong>Adobe Photoshop</strong>.{" "}
        </p>
      </div>
    </div>
  );
};

export default Introduction;
