import React, { useState } from 'react';
import { Link as LinkRoute} from 'react-router-dom';
import {Link as LinkAnimado} from "react-scroll"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './EstilosHomeMenu/EstilosHomeMenu.scss';

export default function HomeMenu(){
    const [sec, setSec] = useState(0);
    const [EstadoMenu, setEstadoMenu] = useState(false);

        const cambioSeccion = (down = true) => down ? (sec === 3 ? setSec(0) : setSec(prev => prev + 1)) 
        :
        (sec === 0 ? setSec(3) : setSec(prev => prev - 1));
    
    const abrirMenuHome = ()=> {
        setEstadoMenu(!EstadoMenu)
    }
    return (
        
            <header className='seccionHomeMenu'>
                <LinkAnimado to='inicio' smooth={true} duration={500}>
                <figure className='HomeLogo'><img src="./IconoHome/CorralonRaccaIcono.jpg" loading='lazy' alt="Corralon racca empresa distribuidora" /></figure>
                </LinkAnimado>
                

                <div className={`HomeMenuBtn ${EstadoMenu && 'open'}`} onClick={abrirMenuHome}>
                    <div className='HomeMenuBtn__line'></div>
                </div>

                <nav className={`navMenu ${EstadoMenu && 'abrirMenu'}`}>
                <p className='navMenu__titulo'>CORRALON RACCA</p>

                <div className={`botonesSeccion ${EstadoMenu && 'mostrarBtnMenu'}`}>
                    <button className='botonesSeccion__btn' onClick={()=>cambioSeccion(false)}><FontAwesomeIcon icon={"angles-up"}></FontAwesomeIcon></button>
                    <button className='botonesSeccion__btn' onClick={cambioSeccion}><FontAwesomeIcon icon={"angles-down"}></FontAwesomeIcon></button>
                </div>
                

                <section className={`TabsContenedor ${EstadoMenu && 'subirItemsMenu'}`}>
                <section className='TabsBtn'>
                    <button className={`TabsBtn__botones ${sec === 0 ? 'activeSeccion':''}`}onClick={()=> setSec(0)}>NUESTRA EMPRESA</button>
                    <button className={`TabsBtn__botones ${sec === 1 ? 'activeSeccion':''}`}onClick={()=> setSec(1)}>PRODUCTOS</button>
                    <button className={`TabsBtn__botones ${sec === 2 ? 'activeSeccion':''}`}onClick={()=> setSec(2)}>SERVICIOS</button>
                    <button className={`TabsBtn__botones ${sec === 3 ? 'activeSeccion':''}`}onClick={()=> setSec(3)}>NOVEDADES</button>
                </section>
                   {sec === 0 ? <div className={`TabsInformacion`}>
                       <LinkRoute to="/historia" className='TabsInformacion__titulo' data-text="NUESTRA EMPRESA">NUESTRA EMPRESA</LinkRoute>
                        <ul className='TabsItems'>
                            
                            <button  className='TabsItems__titulo'data-text="&nbsp;HISTORIA">&nbsp;HISTORIA</button>
                        </ul>
                   </div> : <></>}

                   {sec === 1 ? <div className={`TabsInformacion`}>
                       <LinkRoute to="/productos" className='TabsInformacion__titulo'data-text="PRODUCTOS">PRODUCTOS</LinkRoute>
                        <ul className='TabsItems'>
                            <button className='TabsItems__titulo'data-text="&nbsp;AGRO">&nbsp;AGRO</button>
                            <button className='TabsItems__titulo'data-text="&nbsp;INDUSTRIA">&nbsp;INDUSTRIA</button>
                            <button className='TabsItems__titulo'data-text="&nbsp;CONSTRUCCION">&nbsp;CONSTRUCCION</button>
                            <button className='TabsItems__titulo'data-text="&nbsp;FERRETERIA">&nbsp;FERRETERIA</button>
                        </ul>
                   </div> : <></>}

                   {sec === 2 ? <div className={`TabsInformacion`}>
                       <LinkAnimado to="servicios" smooth={true} className='TabsInformacion__titulo'data-text="SERVICIOS" onClick={abrirMenuHome}>SERVICIOS</LinkAnimado>
                        <ul className='TabsItems'>
                           <button  className='TabsItems__titulo'data-text="&nbsp;LOGISTICA">&nbsp;LOGISTICA</button>
                           <button  className='TabsItems__titulo'data-text="&nbsp;CORTADO DE MATERIALES">&nbsp;CORTADO DE MATERIALES</button>
                           <button  className='TabsItems__titulo'data-text="&nbsp;CORTADO Y DOBLADO">&nbsp;CORTADO Y DOBLADO</button>
                        </ul>
                   </div> : <></>}

                   {sec === 3 ? <div className={`TabsInformacion`}>
                       <LinkRoute to="/novedades" className='TabsInformacion__titulo'data-text="NOVEDADES">NOVEDADES</LinkRoute>
                        <ul className='TabsItems'>
                           <button className='TabsItems__titulo'data-text="&nbsp;PUNTO DE VENTA DE TROMEN">&nbsp;PUNTO DE VENTA DE TROMEN</button>
                           <button className='TabsItems__titulo'data-text="&nbsp;REFERENTES EN SECCO">&nbsp;REFERENTES EN SECCO</button>
                           <button className='TabsItems__titulo'data-text="&nbsp;VIGUETA TENSOLITE">&nbsp;VIGUETA TENSOLITE</button>
                           <button className='TabsItems__titulo'data-text="&nbsp;NUEVO CENTRO DE DISTRIBUCION">&nbsp;NUEVO CENTRO DE DISTRIBUCION</button>
                        </ul>
                   </div> : <></>}
                </section>
            </nav>
            </header>
            
    
    );
}