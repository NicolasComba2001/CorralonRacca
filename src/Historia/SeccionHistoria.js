import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as ScrollTop } from "react-scroll";
import useTitle from "../Ayudadores/useTitle";
import CardHistoria from "./CardHistoria";
import "./EstilosHistoria/EstilosSecHistoria.scss";
export default function SeccionHistoria() {
  useTitle({
    title: "Historia",
    description:
      "Te contamos la historia de evolucion y como nos hemos adaptado a lo largo del tiempo para brindar siempre los mejores productos para la industria, construccion y el agro. Otorgando tambien seguridad y satisfaccion a todos nuestros clientes.",
  });
  useEffect(() => {
    ScrollTop.scrollToTop();
  }, []);
  return (
    <section className="seccionHistoriaRacca">
      <Link to="/" className="btnVolver">
        <FontAwesomeIcon icon={"home"}></FontAwesomeIcon>
      </Link>
      <CardHistoria></CardHistoria>

      <button onClick={() => ScrollTop.scrollToTop()} className="btnUpHistoria">
        <FontAwesomeIcon icon={"angle-up"}></FontAwesomeIcon>
      </button>
    </section>
  );
}
