import React, {useState} from "react";
import '../../styles/Menu.css'
import Perfil from '../../images/perfil.png'

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [movieTitle, setMovieTitle] = useState('')

    const openMenu = () => {
        const toggle = document.getElementById('toggle-menu')
        const drawer = document.getElementById('menu-drawer')
        const popularsContainer = document.getElementById('popularsContainer');
        
        toggle.addEventListener('click', function(){
            if( menuOpen == false){
                setMenuOpen(true)
                toggle.classList.add('active')
                drawer.classList.add('open')
                popularsContainer.style.zIndex = 29;
            } else {
                setMenuOpen(false)
                toggle.classList.remove('active')
                drawer.classList.remove('open')
                popularsContainer.style.zIndex = 31;
            }
        })
    }


    function openModal(){
        let modal = document.getElementById("modal");
        let openModal = document.getElementById("open-modal");
        let span = document.getElementsByClassName("close")[0];
        localStorage.setItem('titulo', '')
        localStorage.setItem('newImage', '')
        openModal.addEventListener('click', function() {
            modal.style.display = "block";
        })

        span.addEventListener('click', function() {
            modal.style.display = "none";
        })
    }

    var btnSubmit = document.getElementById('submit')
    var image = document.getElementById('new-image-container')
    var progress = document.getElementById('progress-bar-inner')
    var progressBar = document.getElementById('progress-bar')
    var percent = document.getElementById('percent');
    var cancel = document.getElementById('cancel');
    var continueBtn = document.getElementById('continue-btn');
    var titleName = document.getElementById('title-name');
    var modalTitle = document.getElementById('modal-title');
    var homeBtn = document.getElementById('home-btn');
    var finalScreen = document.getElementById('final-screen');

    function uploadImage(){
        image.hidden= true
        progress.hidden= false
        progressBar.hidden= false
        percent.hidden= false
        cancel.hidden= false
        btnSubmit.addEventListener('click', function(e) {  
            var i = 0;
            if (i == 0) {
                i = 1;
                var bar = document.getElementById("progress-bar-inner");
                var width = 1;
                var id = setInterval(frame, 10);
            }
            function frame() {
                if (width >= 100) {
                    i = 0;
                } else {
                    width++;
                    bar.style.width = width + "%";
                    percent.innerHTML = 'Cargando ' + width  + "%";
                    if(width == 100){
                        if(localStorage.titulo !== '' && localStorage.newImage !== ''){
                            cancel.innerHTML = 'Listo! ';
                            btnSubmit.hidden = true
                            setMovieTitle(localStorage.titulo)
                            continueBtn.hidden = false
                        } else if (localStorage.titulo === '' || localStorage.newImage === ''){
                            cancel.innerHTML = 'Reintentar ';
                            percent.innerHTML = '¡ERROR! no se pudo cargar la película';
                            progress.style.background = '#FF0000';
                            btnSubmit.style.cursor = 'not-allowed'
                            btnSubmit.disabled = true
                        }
                    }
                }
            }
        });   
    }
    
    function continueUpload(){
        let modal = document.getElementById("modal");
        continueBtn.addEventListener('click', function() {
            continueBtn.hidden = true
            progress.hidden = true
            progressBar.hidden= true
            percent.hidden = true
            cancel.hidden = true
            titleName.hidden = true
            modalTitle.hidden = true

            homeBtn.hidden = false
            finalScreen.hidden = false
        
            homeBtn.addEventListener('click', function() {
                modal.style.display = "none";
            })
        })
    }

    function fileChange(){
        var image = document.getElementById("newImage").value;
        localStorage.setItem("newImage", image);
    }

    function uploadTitle() {
        var title = document.getElementById('title-name').value;
        localStorage.setItem('titulo', title)
    }

    return(
        <div className='menu'>
            <div className='menu-container' onClick={openMenu}>
                <a id='toggle-menu' className='toggle-menu' href='#'>
                    <i></i>
                    <i></i>
                    <i></i>
                </a>
                <div id='menu-drawer' className='menu-drawer'>
                    <ul className="menu-list">
                        <li className="list-item"><a href='#'>Inicio</a></li>
                        <li className="list-item"><a href='#'>Series</a></li>
                        <li className="list-item"><a href='#'>Peliculas</a></li>
                        <li className="list-item"><a href='#'>Agregadas Recientemente</a></li>
                        <li className="list-item"><a href='#'>Populares</a></li>
                        <li className="list-item"><a href='#'>Mis Películas</a></li>
                        <li className="list-item"><a href='#'>Mi lista</a></li>
                        <li className='agregar list-item'>
                            <a href='#' id="open-modal" onClick={openModal}>
                                <span id='icon' className="material-symbols-outlined">add</span> 
                                <p >Agregar película</p>
                            </a>
                            <div id="modal" className="modal">
                                <div className="modal-container">
                                    <span className="close">&times;</span>
                                    <div className="content">
                                        <h6 className="add-movie" id="modal-title">Agregar película</h6>
                                        <div className="upload-container">
                                            <label id='new-image-container' forhtml='newImage' className="new-image">
                                                <div className="upload">
                                                    <span className="material-symbols-outlined">attach_file</span>
                                                    <p>Agregá un archivo o arrastralo y soltalo aquí</p>
                                                </div>
                                                <input type="file" placeholder='newImage' id="newImage" className="new-image-input" onChange={fileChange} />
                                            </label>
                                            <label forhtml='title-name' className="title-name">
                                                <input type='text' onChange={uploadTitle} placeholder='titulo' id='title-name' className="title"  />
                                            </label>
                                            <button onClick={uploadImage} id='submit' className="submit">Subir película </button>
                                            <button onClick={continueUpload} id='continue-btn' className="continue" hidden>Continuar </button>
                                            <div className="progress">
                                                <label className="percent" id='percent' hidden>Cargando 0% </label>
                                                <label className="cancel" id='cancel' hidden>Cancelar </label>
                                                <div id="progress-bar" hidden>
                                                <div id="progress-bar-inner"></div>
                                            </div>
                                            <div id='final-screen' className="final-screen" hidden>
                                                <span className="line1"><strong>Lite</strong>flix</span>
                                                <span className="line2">¡Felicitaciones!</span>
                                                <span className="line3">{movieTitle} fue correctamente subida</span>
                                                <button id='home-btn' className="homeBtn" hidden>Ir a home </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='cerrar list-item'><a href='#'>Cerrar sesión</a></li>
                    </ul>
                </div>
            </div>
            <div className='alert'></div>
            <span id='notifications' className="material-symbols-outlined">notifications</span>
            <img src={Perfil} alt='perfil' />         
        </div>
    )
}