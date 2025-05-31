import { proyectos } from "../../data/proyectos";

export default function ArticleOtros() {
  const otrosProyectos = proyectos.filter(
    (proyecto) => proyecto.tipo === "otros"
  );

  return (
    <div className="px-6 w-full sm:p-5 lg:p-10 flex flex-col gap-10">
      {otrosProyectos.map((proyecto) => (
        <article
          className="w-full flex flex-col items-center md:grid md:grid-cols-2 justify-between gap-4"
          key={proyecto.id}
        >
          <img
            className="h-auto rounded-xl object-cover"
            src={proyecto.imagen}
            alt={proyecto.nombre}
          />
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="font-medium">{proyecto.nombre}</h3>
            <div className="w-full flex items-center justify-center gap-5">
              <div className="flex flex-wrap justify-center gap-2">
                {proyecto.tecnologias.map((tecnologia) => (
                  <img
                    key={tecnologia.nombre}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    src={tecnologia.imagen}
                    alt={tecnologia.nombre}
                  />
                ))}
              </div>
              {proyecto.link && (
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver más
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
