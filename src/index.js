import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './componentes/buttons/Button.jsx'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
            <div>
                <App />
                <Button labelButton="Cadastrar" className='button-component'/>
            </div>
, document.getElementById('root'));
registerServiceWorker();
