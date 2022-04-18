import {novedadesInfo} from './NovedadesData';
import { animateScroll as ScrollAnim } from 'react-scroll/modules';
import "./EstilosNovedades/EstilosNovedadesCard.scss";

export default function CardNovedades({estado, funcionEstado, funcionOpen}) {
    
    const handleClick=(indice)=>{
        funcionOpen(true);
        funcionEstado(indice);
        ScrollAnim.scrollTo(600);
    }
    return(
        <section className='cardNovedades'>
            
            {novedadesInfo.map((el,indice)=>(
                <figure key={indice} className="imgCard" onClick={()=>handleClick(indice)} data-aos="fade-down" data-aos-duration="1500">
                    <img className='imgCard__img' src={el.imagen} alt="Novedades; Corralon Racca, industria, construccion, expansiones y productos." loading='lazy' />
                    <figcaption className='imgCardInfo'>
                        <h5 className='imgCardInfo__titulo'>{el.titulo}</h5>
                        <p className='imgCardInfo__fecha'>Fecha: {el.fecha}</p>
                    </figcaption>
                </figure>
            ))}
            
        </section>
    );
}