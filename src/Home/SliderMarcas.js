import Carousel from 'react-elastic-carousel';
import {listado} from "./MarcasListado/MarcasListado";
import './EstilosListadoMarcas/EstilosListadoMarcas.scss';

const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 ,itemsToScroll: 4},
    { width: 1150, itemsToShow: 5, itemsToScroll: 5 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

export default function SliderMarcas(){
    
    return(
       <section className='marcas'>
         <p className='tituloServicios'>MARCAS</p>
           <Carousel 
        breakPoints={breakPoints}
        >
              {listado.map((el,indice)=><img key={indice} className="cardMarca__img"loading='lazy' src={el.imagen} alt={el.alt} />)}
        </Carousel>
       </section>   
        
           

            
    
        
    );
}