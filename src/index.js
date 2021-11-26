import _ from 'lodash';
import Imagen1 from './img/img1.jpg';
import Imagen2 from './img/img3.jpg';
import Imagen3 from './img/img4.jpg';
import Imagen4 from './img/img5.jpg';
import './css/estilo.less';

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log('SW Registrado', registration)
        }).catch(error => {
            console.log("SW no registrado", error)
        })
    })
}

function componente(){
    const elemento = document.getElementById('ppal');
    let item1 = document.getElementById('imagen4');
    let item2 = document.getElementById('imagen2');
    let item3 = document.getElementById('imagen3');
    let item4 = document.getElementById('imagen1');

    elemento.classList.add('banner');

    let miImagen1 = new Image();
    let miImagen2 = new Image();
    let miImagen3 = new Image();
    let miImagen4 = new Image();

    miImagen1.src = Imagen1;
    miImagen2.src = Imagen2;
    miImagen3.src = Imagen3;
    miImagen4.src = Imagen4;

    item1.appendChild(miImagen3);
    item2.appendChild(miImagen4);
    item3.appendChild(miImagen2);
    item4.appendChild(miImagen1);

    return elemento;
}

document.body.appendChild(componente());