import { Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React, { Suspense } from 'react';
import Loader from './Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

library.add(fas);

const SeccionInicio = React.lazy(()=> import('./Home/SeccionInicio'));
const SeccionProductos = React.lazy(()=> import('./Productos/SeccionInicioProductos'));
const SeccionHistoria = React.lazy(()=> import('./Historia/SeccionHistoria'));
const SeccionNovedades = React.lazy(()=> import('./Novedades/SeccionNovedades'));
const SeccionContacto = React.lazy(()=>import('./Contacto/SeccionContacto'));

function App() {
  return (
    <>
    <Routes>
      
      {/* SECCION HOME, PAGINA PRINCIPAL QUE VERA EL USUARIO */}
      <Route path='/' element={

      <Suspense fallback={<Loader/>}>
        <SeccionInicio></SeccionInicio>
      </Suspense>}>
        
      </Route>

    {/* SECCION PRODUCTOS, PAGINA PRODUCTOS QUE VERA SOLAMENTE SI LA CLICKEA */}
      <Route path='/productos' element={
        
          <Suspense fallback={<Loader></Loader>}>
            <SeccionProductos></SeccionProductos>
          </Suspense>}>

      </Route>

      {/* SECCION HISTORIA, TIMELINE DE LA EMPRESA */}
      <Route path='/historia' element={
        
        <Suspense fallback={<Loader></Loader>}>
          <SeccionHistoria></SeccionHistoria>
        </Suspense>}>

    </Route>

    {/* SECCION NOVEDADES */}
    <Route path='/novedades' element={
        
        <Suspense fallback={<Loader></Loader>}>
          <SeccionNovedades></SeccionNovedades>
        </Suspense>}>

    </Route>

      {/* SECCION CONTACTO */}
    <Route path='/contacto' element={
        
        <Suspense fallback={<Loader></Loader>}>
          <SeccionContacto></SeccionContacto>
        </Suspense>}>

    </Route>



    </Routes>
    </>
  );
}

export default App;
