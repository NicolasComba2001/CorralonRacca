import './EstilosCards/EstilosCards.scss';
export default function Card({data, estado}){
   return(
       <>
        {data.map((card, indice)=>  
        <section key={indice} className={`Card ${indice === estado ? 'activarCard':''}`} >
            <figure className='CardImagen'>
                <img className='CardImagen__img' loading='lazy' src={card.imagen} alt={card.desc} />
            </figure>
            <article className='CardInfo'>
                <h5 className='CardInfo__titulo'>{card.titulo}</h5>
                <p className='CardInfo__parrafo'>{card.desc}</p>
            </article>
        </section>)}</>
   );
}