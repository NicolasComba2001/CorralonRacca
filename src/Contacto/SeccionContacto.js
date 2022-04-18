import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import useTitle from "../Ayudadores/useTitle";
import "../Contacto/EstilosContacto.scss";
import EnviarFormulario from "./EnviarFormulario";


export default function SeccionContacto() {
  useTitle({title: "Contactanos", description: "Productos de calidad, atencion rapida y los mejores precios nunca faltaron con nosotros. Si necesitas saber mas, puedes contactarnos de mil maneras sencillas."})
  useEffect(()=>{
    animateScroll.scrollToTop();
  },[])

  const [Enviado, setEnviado] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      correo: "",
      mensaje: "",
      compra: ""
    },
  });

 
  const onSubmit = (datos) => { 
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
    }, 1500);
    reset();
  };
  return (
    <section className="secForm">
      
        <Link to="/" className="btnVolverInicio"><FontAwesomeIcon icon={"home"}></FontAwesomeIcon></Link>
      <section className="contactoImagen">
        <figure className="contenedorImg">
          <img
            loading="lazy"
            className="contenedorImg__img"
            src="./FormImg/fondoContacto.jpg"
            alt="Contactanos para conseguir lo que necesitas, datos de contacto CORRALON RACCA, presupuestos."
          />
        </figure>
      </section>

      <article className="contactoTexto">
        <section className="formasContacto">
          <p className="formasContacto__items">CONTACTANOS</p>
          <p className="formasContacto__items">
            Si bien somos excelentes para leer la mente, existen formas más
            sencillas de comunicarnos con usted y responder sus preguntas.
          </p>
          <p className="formasContacto__items">
            Contacto por E-mail: <a href="mailto:info@corralonracca.com.ar?subject=Quisiera contactarme con Corralon Racca S.R.L&body=Hola! Soy ..." className="infoContacto--green">info@corralonracca.com.ar</a>
          </p>
          <p className="formasContacto__items">
            Contacto por Telefono: <span className="infoContacto--green">+54 (3564) 426261 / 437847</span>
          </p>
        </section>
        <section className="contactoAviso">
          <p className="contactoAviso__texto">
            Si tiene alguna pregunta, no dude en enviarnos una línea. Si no
            recibe una respuesta de inmediato, es posible que estemos enviando
            algo al medio de la nada. Nos pondremos en contacto con usted tan
            pronto como podamos. ¡Es una promesa!
          </p>
        </section>
      </article>

      <form  className="contFormulario"  onSubmit={handleSubmit(onSubmit)}>
        {Enviado && <EnviarFormulario></EnviarFormulario>}
        <section className="formulario">
        <div className="grupoFormulario">
          <label htmlFor="nombre" className="etiquetaForm">Nombre:</label>
          <input
          className={`inputInfoForm ${(errors.nombre && 'errorEnviar')}`}
            type="text"
            autoComplete="given-name"
            placeholder="Escribe tu nombre"
            id="nombre"
            {...register("nombre", {
              required: true,
              maxLength: 50,
              pattern: {
                value: /^[a-z ,.'-]+$/i,
              },
            })}
          />
          {errors.nombre?.type === "pattern" && (
            <p className="alertaError">DATOS INCORRECTOS, VUELVA A ESCRIBIR</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p className="alertaError">MAXIMO 50 CARACTERES</p>
          )}
          {errors.nombre?.type === "required" && (
            <p className="alertaError">CAMPO REQUERIDO</p>
          )}
        </div>
        <div className="grupoFormulario">
          <label htmlFor="apellido" className="etiquetaForm">Apellido:</label>
          <input
          className={`inputInfoForm ${(errors.apellido && 'errorEnviar')}`}
          autoComplete="family-name"
            type="text"
            placeholder="Escribe tu apellido"
            id="apellido"
            {...register("apellido", {
              required: true,
              maxLength: 50,
              pattern: {
                value: /^[a-z ,.'-]+$/i,
              },
            })}
          />
          {errors.apellido?.type === "pattern" && (
            <p className="alertaError">DATOS INCORRECTOS, VUELVA A ESCRIBIR</p>
          )}
          {errors.apellido?.type === "maxLength" && (
            <p className="alertaError">MAXIMO 50 CARACTERES</p>
          )}
          {errors.apellido?.type === "required" && (
            <p className="alertaError">CAMPO REQUERIDO</p>
          )}
        </div>
        <div className="grupoFormulario">
          <label htmlFor="correo" className="etiquetaForm">Correo Electronico:</label>
          <input
          className={`inputInfoForm ${(errors.correo && 'errorEnviar')}`}
          autoComplete="email"
            type="email"
            placeholder="Escribe tu correo electronico"
            id="correo"
            {...register("correo", {
              required: true,
              maxLength: 150,
              pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
              }
            })}
          />
          {errors.correo?.type === "pattern" && (
            <p className="alertaError">DATOS INCORRECTOS, VUELVA A ESCRIBIR</p>
          )}
          {errors.correo?.type === "maxLength" && (
            <p className="alertaError">MAXIMO 150 CARACTERES</p>
          )}
          {errors.correo?.type === "required" && (
            <p className="alertaError">CAMPO REQUERIDO</p>
          )}
        </div>
        <div className="grupoFormulario">
          <label className="etiquetaForm">Tipo de compra:</label>
          <label htmlFor="compraMayor" className="etiquetaForm">MAYORISTA</label>
          <input name="compras"  className={`inputInfoForm ${(errors.compra && 'errorEnviar')}`}
            type="radio"
            value={"mayorista"}
            id="compraMayor"
            {...register("compra", {
              required: true,
            })}
          /> 
          {errors.compra?.type === "required" && (
            <p className="alertaError">CAMPOS REQUERIDO</p>
          )}
          <label htmlFor="compraMinor" className="etiquetaForm">MINORISTA</label>
          <input  name="compras" className={`inputInfoForm ${(errors.compra && 'errorEnviar')}`}
            type="radio"
            value={"minorista"}
            id="compraMinor"
            {...register("compra", {
              required: true,
            })}
          /> 
        </div>
        <div className="grupoFormulario">
          <textarea  id="mensaje"  placeholder="Dejanos un mensaje..." className={`inputInfoForm texto ${(errors.mensaje && 'errorEnviar')}`}
          {
              ...register("mensaje",{
                maxLength: 255,
                required: true,
                pattern:{
                    value: /[A-Za-z]/
                }
              })
          }
          />
          {errors.mensaje?.type === "pattern" && (
            <p className="alertaError">MENSAJE INCORRECTO, VUELVA A ESCRIBIR</p>
          )}
          {errors.mensaje?.type === "maxLength" && (
            <p className="alertaError">MAXIMO 255 CARACTERES</p>
          )}
          {errors.mensaje?.type === "required" && (
            <p className="alertaError">CAMPO REQUERIDO</p>
          )}
        </div>
        <input type="submit" value={"ENVIAR"}  className="btnEnviar"/>
        </section>
        <figure className="gifContacto">
            <img className="gifContacto__gif" src="./FormImg/formImgEnviado.png" alt="sobre ilustrativo, envio de datos a corralon racca" loading="lazy" />
        </figure>
      </form>
    </section>
  );
}
