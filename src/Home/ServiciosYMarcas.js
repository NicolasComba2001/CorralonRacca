import {DataCardsServicios} from './DataCards/DataCardsServicios'
import CardServicios from "./CardsServicios";
import SliderMarcas from './SliderMarcas';
import './EstilosSerYMarc.scss';

export default function ServiciosYMarcas(){
    return(
        <section className='seccionProductosYMarcas' id="servicios">
        <h3 className='tituloServicios' data-aos="fade-right" data-aos-duration="1000">SERVICIOS</h3>
        <section className='cardsServicios'>
       <CardServicios data={DataCardsServicios}></CardServicios>
        </section>

        <SliderMarcas></SliderMarcas>
        </section>
    );
}