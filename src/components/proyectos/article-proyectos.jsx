import { proyectos } from "../../data/proyectos";

export default function ArticleProyectos() {
  const proyectosPrincipales = proyectos.filter(
    (proyecto) => proyecto.tipo === "principal"
  );

  return (
    <>
      {proyectosPrincipales.map((proyecto) => (
        <article
          className="derecha max-w-2xl p-7 pl-0 lg:p-12 flex flex-col gap-3"
          key={proyecto.id}
        >
          <img
            className="rounded-sm sm:rounded-xl"
            src={proyecto.imagen}
            alt={proyecto.nombre}
          />
          <h3 className="font-medium">{proyecto.nombre}</h3>
          <p>{proyecto.descripcion}</p>
          <div className="flex flex-wrap gap-3 justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {proyecto.tecnologias.map((tecnologia) => (
                <img
                  src={tecnologia.imagen}
                  alt={tecnologia.nombre}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              ))}
            </div>
            {proyecto.link && (
              <a href={proyecto.link} target="_blank">
                Ver más
              </a>
            )}
          </div>
        </article>
      ))}
    </>
  );
}
