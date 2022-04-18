import Card from "./Card";
import "./EstilosCardProductos/EstilosCardProductos.scss";
import { DataCards } from "./DataCards/DataCards";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const finalArray = DataCards.length - 1;

export default function EmpresaYProductos() {
  const [CardActive, setCardActive] = useState(0);

  const handleClick = (sig = true) =>
    sig
      ? CardActive === finalArray
        ? setCardActive(0)
        : setCardActive((prev) => prev + 1)
      : CardActive === 0
      ? setCardActive(finalArray)
      : setCardActive((prev) => prev - 1);

  return (
    <section className="seccionEmpresaProductos" id="productos">
      <section className="infoNuestraEmpresa">
        <h2 className="infoNuestraEmpresa__titulo" data-aos="fade-right" data-aos-duration="1000">NUESTRA EMPRESA</h2>

        <article className="InfoEmpresa">
          <span className="InfoEmpresa__titulo" data-aos="fade-up" data-aos-duration="1000">
            Experiencia, trayectoria y continuidad,
          </span>
          <p className="InfoEmpresa__parrafo">
            de la tercera generación en la empresa nos permite trabajar
            permanentemente en mejorar la atención y el servicio al cliente, así
            como en brindar una mayor variedad de productos y servicios
            abasteciendo el Agro, la Industria y la Construcción.
          </p>
          <p className="InfoEmpresa__parrafo">
            La empresa esta situada en la ciudad de San Francisco, cuenta con un
            Local Comercial a modo de Showroom, Depósitos (4.000 mt2. cubiertos)
            y Oficinas Comerciales sobre la Avenida Rosario de Santa Fe 2302,
            ruta Nacional Nº19 que une las ciudades de Santa Fe y Córdoba.
          </p>
          <div className="contBotonesempresa">
            <Link to="/contacto" className="InfoEmpresa__btn">CONTACTANOS</Link>
          </div>
        </article>
      </section>

      <section className="productosyboton" data-aos="fade-up" data-aos-duration="1000">
        <section className="CardsProductos">
          <Card data={DataCards} estado={CardActive}></Card>
          <div className="cardBotones">
            <button
              className="cardBotones__btn"
              onClick={() => handleClick(false)}
            >
              <FontAwesomeIcon icon={"arrow-left"} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000"></FontAwesomeIcon>
            </button>
            <button className="cardBotones__btn" onClick={handleClick}>
              <FontAwesomeIcon icon={"arrow-right"} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000"></FontAwesomeIcon>
            </button>
          </div>
        </section>

        <section className="verProductos">
          <Link to="/productos" className="verProductos__btn">NUESTROS PRODUCTOS</Link>
          
        </section>
      </section>
    </section>
  );
}
