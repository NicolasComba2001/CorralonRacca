import { Link as LinkRoute } from 'react-router-dom';
import {animateScroll as scroll, Link} from 'react-scroll';
import './EstilosFooter/EstilosFooter.scss';

export default function Footer(){
    return(
        <footer className="footer">
            <section className="ubicacionEmpresa">

                <p className="ubicacionEmpresa__titulo">CORRALON RACCA S.R.L</p>
                <article className="infoEmpresa--flex">
                    <div className="ubicacionBotones">
                        <a href='https://www.google.com/maps/place/Corral%C3%B3n+Racca./@-31.4157695,-62.089726,16.25z/data=!4m9!1m2!2m1!1scorralon+racca+google+maps!3m5!1s0x95cb283067eda0a9:0xed75b58e74a1e833!8m2!3d-31.4154742!4d-62.0891041!15sChpjb3JyYWxvbiByYWNjYSBnb29nbGUgbWFwcyIDiAEBWhwiGmNvcnJhbG9uIHJhY2NhIGdvb2dsZSBtYXBzkgEYYnVpbGRpbmdfbWF0ZXJpYWxzX3N0b3Jl' rel='noreferrer nofollow' target={"_blank"} className="ubicacionBotones__btn">EMPRESA</a>
                        <a href='https://www.google.com/maps/place/Parque+Industrial+San+Francisco+Acceso+Oeste/@-31.4389664,-62.1310371,16z/data=!4m9!1m2!2m1!1sSantiago+Puzzi+4592+!3m5!1s0x95cb281b7f11dd75:0x22edff9b98b1a929!8m2!3d-31.4389664!4d-62.1266597!15sChNTYW50aWFnbyBQdXp6aSA0NTkyWhUiE3NhbnRpYWdvIHB1enppIDQ1OTKSAQ1idXNpbmVzc19wYXJr' rel='noreferrer nofollow' target={"_blank"} className="ubicacionBotones__btn">CENTRO DE DISTRIBUCION</a>
                    </div>
                    <div className='contRedes'>
                        <article><p className='siguenos'>SIGUENOS EN: </p></article>
                        <div className='contBotonesRedes'>
                        <a href="https://www.facebook.com/corralonracca" target={"_blank"} rel="noreferrer nofollow" className='contRedes__red'><img src="RedesImg/facebook.svg" loading='lazy' alt="Facebook Corralon Racca S.R.L" /></a>
                        <a href="https://www.instagram.com/corralonracca/" target={"_blank"} rel="noreferrer nofollow" className='contRedes__red'><img src="RedesImg/instagram.svg"loading='lazy'  alt="Instagram Corralon Racca S.R.L" /></a>
                        </div>
                        
                    </div>
                    <section className="companiaYAyuda">
                    <ul className="contItemsCompania">
                        <p className="companiaYAyudaTitulos">COMPANIA</p>
                        <li className="companiabtnInfo"><LinkRoute to="/productos"  className="companiabtnInfo__btn">Productos</LinkRoute></li>
                        <li className="companiabtnInfo"><Link to="servicios" smooth={true} duration={500} className="companiabtnInfo__btn">Servicios</Link></li>
                        <li className="companiabtnInfo"><LinkRoute to="/historia" className="companiabtnInfo__btn">Historia</LinkRoute></li>
                    </ul>
                    <ul className="contItemsCompania">
                        <p className="companiaYAyudaTitulos">AYUDA</p>
                        <li className="companiabtnInfo"><LinkRoute to="/contacto" className="companiabtnInfo__btn">Contactanos</LinkRoute></li>
                        <li className="companiabtnInfo"><a href="https://www.google.com/maps/place/Corral%C3%B3n+Racca./@-31.4157695,-62.089726,16.25z/data=!4m9!1m2!2m1!1scorralon+racca+google+maps!3m5!1s0x95cb283067eda0a9:0xed75b58e74a1e833!8m2!3d-31.4154742!4d-62.0891041!15sChpjb3JyYWxvbiByYWNjYSBnb29nbGUgbWFwcyIDiAEBWhwiGmNvcnJhbG9uIHJhY2NhIGdvb2dsZSBtYXBzkgEYYnVpbGRpbmdfbWF0ZXJpYWxzX3N0b3Jl" target={"_blank"} rel="noreferrer nofollow" className="companiabtnInfo__btn">Ubicanos</a></li>
                    </ul>
                    </section>
                </article>
                
                
            </section>
            <article className="copy">
                <p className="copy__text">E-mail: info@corralonracca.com.ar - Tel: +54 (3564) 426261 / 437847 - Dir: Av. Rosario de Santa Fe 2302</p>
            </article>
            <button className="btnUp" onClick={()=>scroll.scrollToTop()}>VOLVER AL INICIO</button>
            
        </footer>
    );
}