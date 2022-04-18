import { Link } from "react-router-dom";
import "./EstilosNovedades/EstilosNovedades.scss";
export default function Novedades() {
  return (
    <section className="secNovedades">
      <section className="novedadesContenido">
        <article className="novedadesTitulo">
          <p className="novedadesTitulo__titulo" data-aos="fade-right" data-aos-duration="1000">
            Diseños novedosos: Buscamos la diferencia no solo en el
            funcionamiento sino también en la estética.
          </p>
          <Link to="/novedades" className="btnNovedades">CONOCE LAS NOVEDADES</Link>
        </article>
        <figure className="novedadesImagen">
          <img
            className="novedadesImagen__img"
            loading="lazy"
            src="./NovedadesCorralon/novedadesCorralon.jpg"
            alt="novedades en corralon racca S.L.R, San Francisco, Cordoba, empresa distribuidora mayorista y minorista"
          />
        </figure>
      </section>
      
    </section>
  );
}
