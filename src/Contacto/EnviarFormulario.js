import '../Contacto/EstilosGifDatos.scss';
export default function EnviarFormulario(){
    return(
            <figure className="enviarDatos">
                <img className="enviarDatos__img" src="./FormImg/enviandoDatos.gif" loading='lazy' alt="Enviando datos del formulario." />
                <figcaption className='enviarDatos__mensaje'>ENVIADO!</figcaption>
            </figure> 
    );
}