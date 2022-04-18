
import HomeMenu from "./HomeMenu";
import EmpresaYProductos from "./EmpresaYProductos";
import ServiciosYMarcas from "./ServiciosYMarcas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {animateScroll as scroll } from "react-scroll";
import './EstilosHomeSeccion/EstilosHomeSeccion.scss';
import SeccionHistoria from "./SeccionHistoria";
import Novedades from "./Novedades";
import Footer from "./Footer";



export default function SeccionInicio() {
  
  return (
    <>
    {/* HEADER CON MENU Y SUS ITEMS */}
         <HomeMenu></HomeMenu>
         
         {/* IMAGEN DE FONDO CON EL TEXTO DE C RACCA */}
          <figure className="SeccionHome" id="inicio">
            <img src="./FondoHome/fondoHome.jpg" alt="centro de distribucion corralon racca SRL" loading='lazy' />
            <figcaption className="contenedorHomeInfo">

            <figure className="SeccionHomeImg"><img className="SeccionHomeImg__imagen" src="./IconoHome/CorralonRaccaIcono.jpg" alt="Corralon Racca" loading='lazy' /></figure>

            <h1 className="SeccionHomeTitulo">Corralon Racca S.R.L</h1>
                  <article className="SeccionHomeTexto">
                  <p className="SeccionHomeTexto__parrafo">
                    Corralón Racca S.R.L. es una empresa distribuidor mayorista y
                    minorista con
                    presencia en el mercado local y regional.
                  </p>
                  <div className='ventajas'>
                    <p className='iconosVentajas'><FontAwesomeIcon icon={"users"} className="iconosVentajas__img"></FontAwesomeIcon>+9000 Clientes satisfechos</p>
                  
                  
                    <p className='iconosVentajas'><FontAwesomeIcon icon={"shield"} className="iconosVentajas__img"></FontAwesomeIcon>Pagos seguros</p>
                  
                  
                    <p className='iconosVentajas'><FontAwesomeIcon icon={"dolly"} className="iconosVentajas__img"></FontAwesomeIcon>Envios gratis</p>
                  </div>
                </article>
            </figcaption>
            <p className="scrolldown" onClick={()=>scroll.scrollTo(700)}>
                Desliza hacia abajo
            <FontAwesomeIcon icon={"arrow-down"} className="scrolldown__texto"></FontAwesomeIcon>
            </p>
          </figure>

    {/* FRAGMENTO DE "QUIENES SOMOS COMO EMPRESA" Y SLIDER CASERO DE PRODUCTOS */}
        <EmpresaYProductos></EmpresaYProductos>

      {/* PRESENTACION DE SERVICIOS COMO CARDS Y UN SLIDER LIBRERIA CON LAS MARCAS */}
        <ServiciosYMarcas></ServiciosYMarcas>

    {/* HISTORIA DE LA EMPRESA, UN PAR DE FRAGMENTOS */}
        <SeccionHistoria></SeccionHistoria>

        {/* NOVEDADES DEL CORRALON */}
        <Novedades></Novedades>

        {/* FOOTER */}
        <Footer></Footer>
    </>
   
  );
}
