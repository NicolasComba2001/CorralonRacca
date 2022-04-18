import './EstilosLoader.scss';
export default function Loader(){
    return(
        <section className='secLoader'>
            <figure className="loader">
            <img className="loader__img" loading='lazy' src="./ImgLoader/LoaderCorralon.gif" alt="Cargando Corralon Racca Distribuciones" />
            <figcaption className="loaderTitulo">
                <p className="loaderTitulo__titulo">CARGANDO...</p>
            </figcaption>
        </figure>
        </section>
        
    );
}