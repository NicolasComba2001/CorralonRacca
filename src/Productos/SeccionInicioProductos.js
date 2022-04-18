import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

import "./EstilosSeccionInicioProductos/EstilosSeccionInicioProductos.scss";
import { useEffect, useState } from "react";
import useTitle from "../Ayudadores/useTitle";

export default function SeccionInicioProductos() {
  useTitle({
    title: "Productos",
    description:
      "Contamos con los mejores productos para la industria, construccion, ferreteria y el agro. Alambres rurales, bobinas para enrrollar, chapas lisas laminadas y mucho mas.",
  });
  const [Select, setSelect] = useState(null);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  const itemSelect = (indice) => {
    setSelect(indice);
  };

  return (
    <section className="secProductos">
      <figure className="imagenProductos">
        <img
          className="imagenProductos__img"
          src="./SecProductos/FondoProductos.jpg"
          loading="lazy"
          alt="Productos Corralon Racca, agro, industria, ferreteria, contruccion."
        />
      </figure>
      <section className="botonesytitulos">
        <p
          className="botonesytitulos__titulos"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          CORRALON RACCA S.R.L
        </p>
        <br />
        <p
          className="botonesytitulos__titulos"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          PRODUCTOS
        </p>
        <LinkRoute to="/" className="volverInicio">
          <FontAwesomeIcon icon={"home"}></FontAwesomeIcon>
        </LinkRoute>

        <div className="botonesProductos">
          <Link
            to="agro"
            className={`botonesProductos__btn`}
            onClick={() => itemSelect(0)}
          >
            AGRO
          </Link>
          <Link
            to="industria"
            className="botonesProductos__btn"
            onClick={() => itemSelect(1)}
          >
            INDUSTRIA
          </Link>
          <Link
            to="construccion"
            className="botonesProductos__btn"
            onClick={() => itemSelect(2)}
          >
            CONSTRUCCION
          </Link>
          <Link
            to="ferreteria"
            className="botonesProductos__btn"
            onClick={() => itemSelect(3)}
          >
            FERRETERIA
          </Link>
        </div>
      </section>
      <p className="scrolldown" onClick={() => scroll.scrollTo(700)}>
        Desliza hacia abajo
        <FontAwesomeIcon
          icon={"arrow-down"}
          className="scrolldown__texto"
        ></FontAwesomeIcon>
      </p>

      <section
        className={`infoProducto ${Select === 0 ? "itemSeleccionado" : ""}`}
        id="agro"
      >
        <figure className="productoImg">
          <img
            className="productoImg__img"
            loading="lazy"
            src="./SecProductos/ProductosAgro.jpg"
            alt="Productos Corralon Racca S.R.L, productos Agro"
          />
        </figure>
        <article className="tablaProducto">
          <p className="tituloTable">AGRO</p>
          <table className="tablaProductos">
            <tbody>
              <tr className="columnaProductos">
                <td
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  Alambres rurales lisos<br></br>
                  Alambres rurales de puas <br></br>
                  Alambres rurales galvanizados<br></br>
                  Bobinas para enfardar <br></br>
                  Tejido chancheros <br></br>
                  Torniquetes <br></br>
                  Maderas <br></br>
                  Postes de quebracho colorado <br></br>
                  Postes de itin <br></br>
                  Postes de eucaliptus <br></br>
                  Postes cuadrados <br></br>
                  Postes de cemento <br></br>
                  Postes metalicos <br></br>
                  Varillas de curupay <br></br>
                  Varillas de urundel <br></br>
                  Varillas de lapacho <br></br>
                  Varillas metalicas para alambrado <br></br>
                  Tranqueras de tablas <br></br>
                  Tranqueras tirantes crucero simple <br></br>
                  Tranqueras tirantes crucero doble <br></br>
                  Tranqueras artisticas <br></br>
                  Tranqueras de caño <br></br>
                  Mangas <br></br>
                  Cepos <br></br>
                  Cargadores <br></br>
                  Basculas para hacienda <br></br>
                  Piletas de cemento <br></br>
                  <br />
                </td>

                <td
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  Caños alcantarillas <br></br>
                  Bobinas para arrollar <br></br>
                  Bolsas para silos <br></br>
                  Silos de alambre <br></br>
                  Monofilamentos para silos <br></br>
                  Rafias para silos <br></br>
                  Bolsas cereleras <br></br>
                  Comederos de lona <br></br>
                  Bisagras <br></br>
                  Paneles solares <br></br>
                  Electrificadores y accesorios<br></br>
                  Carreteles y cables electroplasticos <br></br>
                  Aisladores <br></br>
                  Varillas plasticas <br></br>
                  Estacas y baldes <br></br>
                  Caños polietileno y accesorios <br></br>
                  Boyas y valvulas para aguadas <br></br>
                  Tanques horizontales <br></br>
                  Fumigadores <br></br>
                  Tanques y comederos de polietileno <br></br>
                  Caños galvanizados <br></br>
                  Caños petroleros <br></br>
                  Varillas para molino <br></br>
                  Productos mecano ganadero <br></br>
                  Productos loyto <br></br>
                  Productos moldplast <br></br>
                  Productos vulcano<br></br>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <section
        className={`infoProducto ${Select === 1 ? "itemSeleccionado" : ""}`}
        id="industria"
      >
        <figure className="productoImg">
          <img
            className="productoImg__img"
            loading="lazy"
            src="./SecProductos/ProductosIndustria.jpg"
            alt="Productos Corralon Racca S.R.L, productos Agro"
          />
        </figure>
        <article className="tablaProducto">
          <p className="tituloTable">INDUSTRIA</p>
          <table className="tablaProductos">
            <tbody>
              <tr className="columnaProductos">
                <td
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  Chapas lisas laminadas en frío <br />
                  Chapas lisas laminadas en caliente <br />
                  Caños estructurales redondos <br />
                  Caños estructurales cuadrados <br />
                  Caños estructurales rectangulares <br />
                  Caños estructurales pesados <br />
                  Caños uso mecanico <br />
                  Caños galvanizados <br />
                  Caños sch 40 <br />
                  Caños especiales <br />
                  <br />
                </td>
                <td
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  Caños petroleros <br />
                  Planchuelas <br />
                  Angulos <br />
                  Hierro tee <br />
                  Barras laminadas redondas <br />
                  Barras laminadas cuadradas <br />
                  Perfileria nacional ipn-upn <br />
                  Alalmbres crudos <br />
                  Trefilados <br />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <section
        className={`infoProducto ${Select === 2 ? "itemSeleccionado" : ""}`}
        id="construccion"
      >
        <figure className="productoImg">
          <img
            className="productoImg__img"
            loading="lazy"
            src="./SecProductos/ProductosConstruccion.jpg"
            alt="Productos Corralon Racca S.R.L, productos Agro"
          />
        </figure>
        <article className="tablaProducto">
          <p className="tituloTable">CONSTRUCCION</p>
          <table className="tablaProductos">
            <tbody>
              <tr className="columnaProductos">
                <td
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  Construcción Civil <br></br>
                  Chapas para techo cincalum sinusoidales nº 22 <br></br>
                  Chapas para techo cincalum sinusoidales nº 25 <br></br>
                  Chapas para techo cincalum sinusoidales nº 27 <br></br>
                  Cumbreras para techo cincalum sinusoidales <br></br>
                  Chapas para techo prepintadas sinusoidales nº 25 <br></br>
                  Cumbreras para techo prepintadas sinusoidales <br></br>
                  Chapas pvc sinusoidales <br></br>
                  Chapas para techos cincalum trapezoidales t101 nº 22 <br></br>
                  Chapas para techos cincalum trapezoidales t101 nº 25 <br></br>
                  Chapas para techos cincalum trapezoidales t101 nº 27 <br></br>
                  Cumbreras para techo cincalum trapezoidales t101 <br></br>
                  Cumbreras para techo cincalum lisas <br></br>
                  Chapas para techo prepintadas trapezoidales t101 nº 25{" "}
                  <br></br>
                  Cumbreras para techo prepintadas trapezoidales t101 <br></br>
                  Cumbreras para techo prepintadas lisas <br></br>
                  Chapas pvc trapezoidales t101 <br></br>
                  Chapas para techo cincalum trapezoidal t90 nº 22 <br></br>
                  Chapas para techo cincalum trapezoidal t90 nº 25 <br></br>
                  Chapas pvc trapezoidales t90 <br></br>
                  Chapas lisas galvanizadas <br></br>
                  Chapas lisas cincalum <br></br>
                  Chapas lisas prepintadas <br></br>
                  Chapas lac antideslizante <br></br>
                  Chapas lac estampadas <br></br>
                  Chapas acanalado fino <br></br>
                  Chapas perforadas <br></br>
                  Chapas decorativas <br></br>
                  Chapas lisas especiales <br></br>
                  Metales desplegado <br></br>
                  Chapas policarbonato <br></br>
                  Canaletas galponeras <br></br>
                  Perfil c laminados en caliente <br></br>
                  Perfil c galvanizado <br></br>
                  Perfil u laminados en caliente <br></br>
                  Hierro alambre conformado t-500 <br></br>
                  Hierro acero dureza natural para hirmigón armado dn a-420{" "}
                  <br></br>
                  Hierro acero liso para hormigón armado al-220 <br></br>
                  Mallas cuadradas <br></br>
                  Mallas rectangulares <br></br>
                  Clavos <br></br>
                  Alambres recocidos negros <br></br>
                  Alambres para ataduras <br></br>
                  Perfil ipn <br></br>
                  Perfil upn <br></br>
                  Perfileria importada (w, ipe, upa, heb) <br></br>
                  Planchuelas perforadas <br></br>
                  Hierro herrero torcionado <br></br>
                  Mallas job shop <br></br>
                  Mallas cercos <br></br>
                  Escalones standar metal desplegado <br></br>
                  Ladrillos ceramicos <br></br>
                  Ladrillos de hormigón <br></br>
                  Viguetas pretensadas <br></br>
                  Membranas asfalticas <br></br>
                  Membranas atermicas <br></br>
                  Lana vidrio <br></br>
                  Asfaltea techado <br></br>
                  Postes olimpicos de cemento <br></br>
                  Tubos de alcantarilla <br></br>
                  Rieles para portones <br></br>
                  Carros y accesorios para portones <br></br>
                  <br />
                </td>
                <td
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  Construcción en Seco <br></br>
                  Placas knauf standard <br></br>
                  Placas knauf impregnadas <br></br>
                  Placas knauf cortafuego <br></br>
                  Placas knauf desmontables <br></br>
                  Placas knauf akustik <br></br>
                  Placas knauf diamant <br></br>
                  Placas knauf safeboard <br></br>
                  Placas superboard <br></br>
                  Placas para exterior <br></br>
                  Perfileria knauf <br></br>
                  Perfiles steelhouse <br></br>
                  Perfiles fragming <br></br>
                  Perfileria f-47 cielorras <br></br>
                  Accesorios para cielorrasos <br></br>
                  Perfileria desmontable <br></br>
                  Masillas knauf <br></br>
                  Accesorios (cintas, bandas) <br></br>
                  Accesorios insertables <br></br>
                  Herramientas knauf <br></br>
                  Tornilleria construcción en seco <br></br>
                  Puertas placas de madera <br></br>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <section
        className={`infoProducto ${Select === 3 ? "itemSeleccionado" : ""}`}
        id="ferreteria"
      >
        <figure className="productoImg">
          <img
            className="productoImg__img"
            loading="lazy"
            src="./SecProductos/ProductosFerreteria.jpg"
            alt="Productos Corralon Racca S.R.L, productos Agro"
          />
        </figure>
        <article className="tablaProducto">
          <p className="tituloTable">FERRETERIA</p>
          <table className="tablaProductos">
            <tbody>
              <tr className="columnaProductos">
                <td
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  Alambres Galvanizados<br></br>
                  Tejidos Romboidales<br></br>
                  Tejido Hexagonal<br></br>
                  Telas Galvanizadas<br></br>
                  Tejidos Mosquiteros<br></br>
                  Clavos<br></br>
                  Cables De Acero Galvanizados<br></br>
                  Planchuelas Galvanizadas Para Tejido<br></br>
                  Ganchos Y Grampas Para Tejido<br></br>
                  Canaletas Media Ca¥A<br></br>
                  Canaletas Cuadradas<br></br>
                  Extractores Eolicos<br></br>
                  Electrodos<br></br>
                  Discos De Corte<br></br>
                  Tornillos Autoperforantes<br></br>
                  Agrotilenos<br></br>
                  Media Sombra<br></br>
                  Soga Cabo Mult. Trenzado<br></br>
                  Selladores<br></br>
                  Varillas Roscadas<br></br>
                  <br></br>
                </td>
                <td
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  Tuercas<br></br>
                  Arandelas<br></br>
                  Remaches Rapido<br></br>
                  Hojas De Sierra<br></br>
                  Mechas Cilindricas<br></br>
                  Mechas Para Madera<br></br>
                  Hormigoneras<br></br>
                  Palas<br></br>
                  Horquillas<br></br>
                  Cabos<br></br>
                  Tenazas<br></br>
                  Cintas Metricas<br></br>
                  Candados<br></br>
                  Herramientas De Mano<br></br>
                  Herramientas Electricas<br></br>
                  Herrajes Arena<br></br>
                  Mesas Rusticas<br></br>
                  Sillas<br></br>
                  Bancos<br></br>
                  Artefactos Tromen<br></br>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <button className="btnUpSec" onClick={() => scroll.scrollToTop()}>
        <FontAwesomeIcon icon={"home"}></FontAwesomeIcon>
      </button>
    </section>
  );
}
