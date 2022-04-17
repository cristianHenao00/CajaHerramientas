'use strict';

import Ayudas from "../../assets/js/ayudas.js";
import Modal from "../modales/modal.js";

document.addEventListener('DOMContentLoaded', async event => {
    await Ayudas.cargarPagina(
        "menuMobile",
        "../mobile/menuMobile.html"
    ).then(
        gestionarMetodos,
    ).catch(error => {
        Ayudas.alerta("cajaPrincipal",
            "Imposible acceder al menu", error);
    });

    await Modal.crear();
});

let gestionarMetodos = () => {
    cambiarColorMenuMobil();
    abrirMarcoNormativo();
    abrirRecomendaciones();
    abrirLenguajeUno();
    abrirLenguajeDos();
    abrirAccesoTexto();
    abrirAccesoImagenes();
    abrirElaborarVideos();
    abrirUsoImagenes();
}

let cambiarColorMenuMobil = () =>{
    let menu = document.querySelector(".navbar-toggler");
    window.addEventListener('scroll',()=>{
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 2470 && scrollTop < 5920) {
            menu.style.color = "#000000";
        }else{
            menu.style.color = "#ffff";
        }
    });
}

let abrirMarcoNormativo = () => {
    document.getElementById("btnMarco").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarMarcoNormativo();
    });
}

let abrirRecomendaciones = () => {
    document.getElementById("btnRecomendaciones").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarRecomendaciones();
        setTimeout(() => {
            $(document).ready(function () {
                $("#owl-introRecomen").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    autoPlay: false,
                    items: 1,
                    itemsDesktop: [640, 5],
                    itemsDesktopSmall: [414, 4]
                });
            });
        }, 20);  
    });
}

let abrirLenguajeUno = () => {
    document.getElementById("btnLenguaje").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarLenguajeUno();
    });
}

let abrirLenguajeDos = () => {
    document.getElementById("btnRecomendacionesL").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarLenguajeDos();
        setTimeout(() => {
            $(document).ready(function () {
                $("#owl-lenguajeDos").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    autoPlay: false,
                    items: 1,
                    itemsDesktop: [640, 5],
                    itemsDesktopSmall: [414, 4]
                });
            });
        }, 20); 
    });
}

let abrirAccesoTexto = () => {
    document.getElementById("btnAccesText").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarAccesoTexto();
        setTimeout(() => {
            $(document).ready(function () {
                $("#owl-AccessTexto").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    autoPlay: false,
                    items: 1,
                    itemsDesktop: [640, 5],
                    itemsDesktopSmall: [414, 4]
                });
            });
        }, 20); 
    });
}

let abrirAccesoImagenes = () => {
    document.getElementById("btnAccessImg").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarAccesoImg();
    });
}

let abrirElaborarVideos = () => {
    document.getElementById("btnElaboracion").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarElaborarVideos();
        setTimeout(() => {
            $(document).ready(function () {
                $("#owl-ElaboracionV").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    autoPlay: false,
                    items: 1,
                    itemsDesktop: [640, 5],
                    itemsDesktopSmall: [414, 4]
                });
            });
        }, 20); 
    });
}

let abrirUsoImagenes = () => {
    document.getElementById("btnUso").addEventListener('click', (event) => {
        event.preventDefault();
        Modal.desplegarUsoImagenes();
    });
}

