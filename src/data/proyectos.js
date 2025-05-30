import { tecnologias } from "./tecnologias";

export const proyectos = [
  {
    id: 1,
    nombre: "CineFlicks",
    descripcion:
      "Interfaz de las nuevas películas ordenadas por genero, además de poseer información detallada sobre cada una de ellas. Utiliza una API, permitiendo a los usuarios descubrir las peliculas nuevas del momento.",
    tecnologias: [tecnologias[0], tecnologias[1], tecnologias[2]],
    link: "https://cineeflicks.netlify.app/",
    imagen: "/img/cineflicks.jpg",
    tipo: "principal",
  },
  {
    id: 2,
    nombre: "Reproductor de Videos - Youtube",
    descripcion:
      "Permite a los usuarios guardar y reproducir distintos videos de Youtube. Cuenta con una sección de Favoritos, además de un reproductor de los videos.",
    tecnologias: [
      tecnologias[0],
      tecnologias[1],
      tecnologias[2],
      tecnologias[3],
      tecnologias[4],
    ],
    link: "https://reproductorytortiz.netlify.app/",
    imagen: "/img/reproductor.png",
    tipo: "principal",
  },
  {
    id: 3,
    nombre: "LibreriaCrearte",
    descripcion: "Trabajo personalizado para una Libreria - Aplicación de escritorio con Windows Forms (.NET), para control de Stock e Historial de sus ventas.",
    tecnologias: [
      tecnologias[6],
      tecnologias[7],
    ],
    imagen: "/img/libreria.png",
    tipo: "principal",
  },
  {
    id: 4,
    nombre: "Linea Z - (Proyecto en desarrollo)",
    tecnologias: [
      tecnologias[0],
      tecnologias[1],
      tecnologias[4],
      tecnologias[5],
      tecnologias[3],
      tecnologias[2],
    ],
    imagen: "/img/linea-z.png",
    tipo: "otros",
  },
  {
    id: 5,
    nombre: "La Liga Argentina",
    tecnologias: [tecnologias[0], tecnologias[1]],
    link: "https://laligaargentina.netlify.app/",
    imagen: "/img/laliga.jpg",
    tipo: "otros",
  },
  {
    id: 6,
    nombre: "Portafolio",
    tecnologias: [
      tecnologias[0],
      tecnologias[1],
      tecnologias[4],
      tecnologias[5],
      tecnologias[3],
      tecnologias[2],
    ],
    imagen: "/img/portafolio.png",
    tipo: "otros",
  },
];
