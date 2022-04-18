import {HashRouter } from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const contenedor = document.getElementById('root');
const root = createRoot(contenedor);
root.render(
<HashRouter>
  <App/>
</HashRouter>
);

reportWebVitals();
