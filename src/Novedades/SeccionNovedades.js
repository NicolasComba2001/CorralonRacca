import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { novedadesInfo } from "./NovedadesData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardNovedades from "./CardNovedades";
import "./EstilosNovedades/EstilosNovedades.scss";
import { animateScroll } from "react-scroll";
import useTitle from "../Ayudadores/useTitle";

export default function SeccionNovedades() {
  useTitle({
    title: "Novedades",
    description:
      "Nuevas novedades acerca de nuestra empresa. Nuevos diseños novedosos buscando la mejor eficiencia, toda la gama de linea Knauf, nuevos podructos ingresantes y nuevo centro de distribucion.",
  });
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);
  const [Select, setSelect] = useState(null);
  const [Open, setOpen] = useState(false);

  return (
    <section className="novedades">
      <section className="seccionNovedades">
        <Link to="/" className="volverHome">
          <FontAwesomeIcon icon={"home"}></FontAwesomeIcon>
        </Link>
        <article className="titulosNovedades">
          <p className="titulosNovedades__titulos">
            NOVEDADES DE NUESTRA{" "}
            <span
              className="titulosNovedades__titulos--green"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              EMPRESA
            </span>
          </p>
          <p className="titulosNovedades__titulos">
            Puerta vidriada: Resistente a altas temperaturas el cristal
            vitrocerámico Schott Robax utilizado, producto de la mejor
            tecnología alemana, permite apreciar el fuego logrando un control
            total de la combustión y por sobre todo disfrutar de una exquisita
            vista del fuego como si fuera un hogar tradicional.
          </p>

          <div className="contenedorNovRedes">
            <a
              href="https://www.facebook.com/corralonracca"
              target={"_blank"}
              rel="noreferrer nofollow"
              className="iconRedes"
            >
              <img
                loading="lazy"
                className="iconRedes__ico"
                src="./RedesImg/facebook.svg"
                alt="Redes de contacto Corralon Racca, facebook"
              ></img>
            </a>
            <a
              href="https://www.instagram.com/corralonracca/"
              target={"_blank"}
              rel="noreferrer nofollow"
              className="iconRedes"
            >
              <img
                loading="lazy"
                className="iconRedes__ico"
                src="./RedesImg/instagram.svg"
                alt="Redes de contacto Corralon Racca, instagram"
              ></img>
            </a>
          </div>
        </article>
        <CardNovedades
          estado={Open}
          funcionEstado={setSelect}
          funcionOpen={setOpen}
        ></CardNovedades>
      </section>
      {Open &&
        novedadesInfo.map((el, indice) => {
          if (Select === el.id) {
            return (
              <article key={indice} className="mostrarNovedad">
                <figure className="novedadMostradaImagen">
                  <img
                    className="novedadMostradaImagen__img"
                    loading="lazy"
                    src={el.imagen}
                    alt={el.titulo}
                  />
                </figure>
                <article className="contenedorInfoImgMostrada">
                  <p className="mostrarNovedad__titulo">{el.titulo}</p>
                  <p className="mostrarNovedad__fecha">Fecha: {el.fecha}</p>
                  <p className="mostrarNovedad__descripcion">
                    {el.descripcion}
                  </p>
                </article>
              </article>
            );
          }
          return null;
        })}
    </section>
  );
}
