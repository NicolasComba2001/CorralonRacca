import './EstilosCardsServicios/EstilosCardsServicios.scss';

export default function CardServicios({data}){

   return(
       <>
        {data.map((card, indice)=>  
        <section key={indice} className={`CardServicio`} data-aos="fade-up" data-aos-duration="1000">
            <figure className='CardServicioImagen'>
                <img className='CardServicioImagen__img' loading='lazy' src={card.imagen} alt={card.desc} />
            </figure>
            <article className='CardServicioInfo'>
                <h4 className='CardServicioInfo__titulo'>{card.titulo}</h4>
                <p className='CardServicioInfo__parrafo'>
                {card.desc}
                </p>                
            </article>
        </section>)}</>
   );
}