import {historia} from'./HistoriaData';
import "./EstilosHistoria/EstilosHistoria.scss";

export default function CardHistoria() {
    return(
      <>
      {historia.map((el,indice)=>(
          <section className="lineaTemporal" key={indice}>
          <article className={`infoTiempo k${indice}`} data-aos="zoom-in" data-aos-duration="1000">
            <div className="puntoTiempo">{el.tiempo}</div>
            <section className="detallesHistoria">
              <span className="infoTiempo__fecha">{el.tiempo}</span>
              <p className="infoTiempo__texto">
                {el.descripcion}
              </p>
            </section>
            {indice === 1 || indice === 3 || indice === 5 || indice === 7 || indice  === 9 ||
              indice === 11 || indice === 13 || indice === 15 ? <figure className="imgHistoria"><img className="imgHistoria__img" loading='lazy' src={el.imagen} alt="Evolucion corralon racca S.R.L" /></figure> : <></>}
          </article>
        </section>
      ))}
      </>
    );
}