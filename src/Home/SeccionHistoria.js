import { Link } from "react-router-dom";
import "./EstilosHistoria/EstilosHistoria.scss";
export default function SeccionHistoria() {
  return (
    <section className="historiaCorralon" id="historia">
      <section className="titulosHistoria">
        <article className="historiaInicio">
          <span className="historiaInicio__fecha" data-aos="fade-left" data-aos-duration="1000">1960.</span>
          <p className="historiaInicio__info" data-aos="fade-up" data-aos-duration="1200">
            Realdo Racca inicia humildemente su actividad...
          </p>
        </article>
        <figure className="historiaImagen">
          <img
            loading="lazy"
            className="historiaImagen__img"
            src="./HistoriaImg/IniciosCorralon.jpg"
            alt="1960 inicios de Corralon Racca en San Francisco"
          />
        </figure>
      </section>

      <section className="textoHistoria">
        <article className="parrafosHistoria">
          <article className="parrafo--flex">
            <p className="parrafosHistoria__parrafos">
              Debido a las necesidades regionales producto de la ganadería y
              lechería comienza a 
              <span className="parrafoNegrita"> vender artículos rurales </span>
              como: alambres, maderas, postes, varillas, tranqueras, mangas,
              cepos, cargadores abasteciendo a los colonos de la zona.
            </p>
            <br />
            <p className="parrafosHistoria__parrafos">
              <span className="parrafoNegrita">
                Se incorpora Horacio Racca, hijo menor de Realdo, </span>
               buscando ya la impronta de ser reconocidos como Corralón en la
              ciudad y zona de San Francisco.
            </p>
            <br />
          </article>

          <article className="parrafo--flex">
            <p className="parrafosHistoria__parrafos">
              Luego de <span className="parrafoNegrita">
                invertir en camiones y autoelevadores modernizando </span>
               la forma de trabajar se adquiere la Distribución de Productos
              ACINDAR solamente para la Línea de Alambres Rurales.
            </p>
            <br />
            <p className="parrafosHistoria__parrafos">
               El crecimiento del negocio hizo que se decida <span className="parrafoNegrita">
                 incorporar a la hija de Realdo 
              </span>
              , María Ester desenvolviéndose y aportando su conocimiento en el
              área contable.
            </p>
            <br />
          </article>
        </article>
        <div className="botonesHistoria">
          <Link to="/historia" className="botonesHistoria__btn" data-content="HISTORIA">
            CONOCE NUESTRA HISTORIA
          </Link>
        </div>
      </section>
    </section>
  );
}
