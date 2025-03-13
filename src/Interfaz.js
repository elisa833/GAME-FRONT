import Swal from 'sweetalert2';
import Game from './Game.js';

let btn_player1 = document.getElementById("btn_player1");
let btn_player2 = document.getElementById("btn_player2");
let player1, player2, pj1 = "", pj2 = "", aceptar = 0, turnoPy1 = 0, turnoPy2 = 0, victoriaPy1 = 0, victoriaPy2 = 0;


const ataques = {
    "Goku":{
        "color": "rgba(249, 220, 219, 0.55) linear-gradient(180deg, rgba(249, 220, 219, 0.5) 15%, rgba(241, 177, 177, 0.49) 50%, rgba(239, 113, 67, 0.5) 87%)",
        "atk1": "¡Vamos, pelea en serio, quiero divertirme!",
        "atk2": "¡Aún no has visto mi verdadero poder!",
        "curar": "¡Uff, eso dolió… pero todavía puedo seguir!",
    },
    "Veguetta":{
        "color": "rgb(226,204,249, 0.55) linear-gradient(180deg, rgba(226,204,249,0.5) 15%, rgba(139,24,212,0.5) 53%, rgba(87,5,125,1 0.5) 87%)",
        "atk1": "¡Esto no es ni el 10% de mi verdadero poder!",
        "atk2": "¡Muere, insecto!",
        "curar": "¡Vaya, eso estuvo cerca! Pero ahora estoy mejor que nunca.",
    },
    "Vegito":{
        "color": "rgb(219,243,249, 0.55) linear-gradient(180deg, rgba(219,243,249,0.5) 15%, rgba(177,228,241,0.5) 50%, rgba(0,212,255,0.5) 87%)",
        "atk1": "¡Vamos, diviértanme un poco antes de que acabe con contigo!",
        "atk2": "¡Ni siquiera juntos pueden hacerme sudar!",
        "curar": "¡Ja! Como si un simple golpe pudiera derrotarme.",
    },
    "Trunks":{
        "color": "rgb(183,219,241, 0.55) linear-gradient(180deg, rgba(183,219,241,0.5) 15%, rgba(24,159,212,0.5) 53%, rgba(5,63,125,0.5) 87%)",
        "atk1": "¡No permitiré que destruyas mi mundo!",
        "atk2": "¡Mi espada acabará con este combate!",
        "curar": "¡Siento un nuevo poder dentro de mí!",
    },
    "Pikoro":{
        "color": "rgb(183,241,185, 0.55) linear-gradient(180deg, rgba(183,241,185,0.5) 15%, rgba(110,193,114,0.5) 53%, rgba(38,125,5,0.5) 87%)",
        "atk1": "¡Eres fuerte, pero yo soy más inteligente!",
        "atk2": "¡Voy a acabar con esto de una vez!",
        "curar": "¡Los Namekianos tenemos una resistencia increíble!",
    },
    "Gohan":{
        "color": "rgb(241,219,208, 0.55) linear-gradient(180deg, rgba(241,219,208,0.5) 15%, rgba(237,212,85,0.5) 53%, rgba(241,238,41,0.5) 87%)",
        "atk1": "¡No voy a perder contra ti!",
        "atk2": "¡Tienes demasiado orgullo, y eso será tu perdición!",
        "curar": "¡Ahora me siento mucho mejor, es hora de continuar!",

    },
    "Gogeta":{
        "color": "rgb(241,219,208, 0.55) linear-gradient(180deg, rgba(241,219,208,0.5) 15%, rgba(237,114,85,0.5) 53%, rgba(241,59,41,0.5) 87%)",
        "atk1": "¡Vamos, no querrás rendirte tan pronto!",
        "atk2": "¡Te arrepentirás de haberte enfrentado a mí!",
        "curar": "¡Nada mal, pero eso no fue suficiente para derrotarme!",
    },
    "Cell":{
        "color": "rgb(83,233,89,0.55) linear-gradient(180deg, rgba(83,233,89,0.5) 15%, rgba(56,164,42,0.5) 53%, rgba(19,70,14,0.5) 87%)",
        "atk1": "¡Vamos, no querrás rendirte tan pronto!",
        "atk2": "¡Te arrepentirás de haberte enfrentado a mí!",
        "curar": "¡Nada mal, pero eso no fue suficiente para derrotarme!",
    },

}

const iniciar_player1 = () => {
    document.getElementById('player1').classList.add("d-none");
    aceptar++;
    if (aceptar == 2) {
        document.getElementById("iniciar_juego").classList.remove("d-none")
        let timerInterval;
    Swal.fire({
        title: "INICIAR COMABTE",
        html: "EN <b>3</b> segundos", // Aquí se agrega un <b> donde se mostrará el tiempo
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            let timeLeft = Swal.getTimerLeft(); // Obtienes el tiempo restante en milisegundos
            let secondsLeft = Math.floor(timeLeft / 1000); // Convertimos a segundos
            timer.textContent = secondsLeft; // Actualizamos el temporizador en segundos
    
            // Actualizamos el temporizador cada segundo
            timerInterval = setInterval(() => {
                timeLeft = Swal.getTimerLeft(); // Vuelves a obtener el tiempo restante
                secondsLeft = Math.floor(timeLeft / 1000); // Lo conviertes a segundos
                if (timer) {
                    timer.textContent = secondsLeft; // Actualizas el valor
                }
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval); // Limpiamos el intervalo cuando el modal se cierre
            Swal.fire({
                title: "Inicia el jugador 1",
                text: "El jugador 2 no podra hacer nada hasta que el jugador 1 haga un movimiento",
                icon: "success"
            });
        }
    });
    }

}
const iniciar_player2 = () => {
    document.getElementById('player2').classList.add("d-none");
    aceptar++;
    if (aceptar == 2) {
        document.getElementById("iniciar_juego").classList.remove("d-none")
        let timerInterval;
    Swal.fire({
        title: "INICIAR COMABTE",
        html: "EN <b>3</b> segundos", // Aquí se agrega un <b> donde se mostrará el tiempo
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            let timeLeft = Swal.getTimerLeft(); // Obtienes el tiempo restante en milisegundos
            let secondsLeft = Math.floor(timeLeft / 1000); // Convertimos a segundos
            timer.textContent = secondsLeft; // Actualizamos el temporizador en segundos
    
            // Actualizamos el temporizador cada segundo
            timerInterval = setInterval(() => {
                timeLeft = Swal.getTimerLeft(); // Vuelves a obtener el tiempo restante
                secondsLeft = Math.floor(timeLeft / 1000); // Lo conviertes a segundos
                if (timer) {
                    timer.textContent = secondsLeft; // Actualizas el valor
                }
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval); // Limpiamos el intervalo cuando el modal se cierre
            Swal.fire({
                title: "Inicia el jugador 1",
                text: "El jugador 2 no podra hacer nada hasta que el jugador 1 haga un movimiento",
                icon: "success"
            });
        }
    });
    }

}

let seleccion1 = document.getElementById("player1_seleccion");
seleccion1.addEventListener('click', (event) => {
    pj1 = event.target.alt == undefined ? "" : event.target.alt;

    seleccion1.querySelectorAll("img").forEach((temp_img) => {
        temp_img.classList.remove("btn-warning")
        temp_img.classList.add("btn-danger")
    });

    event.target.classList.remove("btn-danger");
    event.target.classList.add("btn-warning");
})

let seleccion2 = document.getElementById("player2_seleccion");
seleccion2.addEventListener('click', (event) => {
    pj2 = event.target.alt == undefined ? "" : event.target.alt;

    seleccion2.querySelectorAll("img").forEach((temp_img) => {
        temp_img.classList.remove("btn-warning")
        temp_img.classList.add("btn-primary")
    });

    event.target.classList.remove("btn-primary");
    event.target.classList.add("btn-warning");
})

btn_player1.addEventListener('click', () => {
    let user_name1 = document.getElementById("user_name1").value;
    if (user_name1 == "") {
        Swal.fire({
            title: "Advertencia para el jugador 1",
            text: "Tienes que ingresar un nombre de usuario",
            icon: "warning"
        });
    } else {
        player1 = new Game(user_name1);
        if (pj1 == "") {
            Swal.fire({
                title: "Advertencia para el jugador 1",
                text: "Tienes que elegir un personaje",
                icon: "warning"
            });
        } else {
            document.getElementById("p1").innerText = user_name1.toUpperCase();
            document.getElementById("avatar1").src = `./public/img/${pj1}/base.png`;
            iniciar_player1();
        }
    }
})

btn_player2.addEventListener('click', () => {
    let user_name2 = document.getElementById("user_name2").value;
    if (user_name2 == "") {
        Swal.fire({
            title: "Advertencia para jugador 2",
            text: "Tienes que ingresar un nombre de usuario",
            icon: "warning"
        });
    } else {
        player2 = new Game(user_name2);
        if (pj2 == "") {
            Swal.fire({
                title: "Advertencia para jugador 2",
                text: "Tienes que elegir un personaje",
                icon: "warning"
            });
        } else {
            document.getElementById("p2").innerText = user_name2.toUpperCase();
            document.getElementById("avatar2").src = `./public/img/${pj2}/base.png`;
            iniciar_player2();
        }
    }
})

//Actualiza el estado barra de los botones MO
const actualizarEstadoBoton = (jugador, estado) => {
    document.getElementById(`btn_atk_py${jugador}`).disabled = estado;
    document.getElementById(`btn_ermi_py${jugador}`).disabled = estado;
    document.getElementById(`btn_ki_py${jugador}`).disabled = estado;
    document.getElementById(`btn_esp_py${jugador}`).disabled = estado;
};

const turno = (turno, atacante, turnos = 0) => {    
    console.log(turnoPy1, turnoPy2);
    
    // Habilitar botones del jugador en turno
    actualizarEstadoBoton(turno, false);

    // Manejo de la habilidad especial
    if (turnos > 0 && turnos < 3) {
        document.getElementById(`btn_esp_py${turno}`).disabled = true;
    } else if (turnos >= 3) {
        document.getElementById(`btn_esp_py${turno}`).disabled = false;
        turno === 1 ? turnoPy1 = 0 : turnoPy2 = 0;
    }

    // Deshabilitar botones del atacante
    actualizarEstadoBoton(atacante, true);
};

//Actualiza el marcador contando las victorias del jugador MO
const actualizarMarcador = (jugador, victorias) => {
    document.getElementById(`victoriasP${jugador}`).textContent = victorias;
};

const reiniciarJugador = (jugador) => {
    jugador.aumentoVida(100);
    jugador.setKi(80);
    jugador.setEnergia(90);
    jugador.setSemilla(3);
};

const actualizarBarraEstado = (jugador) => {
    document.getElementById(`vida_py${jugador}`).style.width = `100%`;
    document.getElementById(`ki_py${jugador}`).style.width = `100%`;
    document.getElementById(`energia_py${jugador}`).style.width = `100%`;

    document.getElementById(`vida_py${jugador}`).innerText = `100%`;
    document.getElementById(`ki_py${jugador}`).innerText = `100%`;
    document.getElementById(`energia_py${jugador}`).innerText = `100%`;

    document.getElementById(`se_p${jugador}`).innerText = window[`player${jugador}`].getSemilla();
};

const actualizarBotones = (habilitar, jugador) => {
    const estado = !habilitar;
    document.getElementById(`btn_atk_py${jugador}`).disabled = estado;
    document.getElementById(`btn_ermi_py${jugador}`).disabled = estado;
    document.getElementById(`btn_ki_py${jugador}`).disabled = estado;
    document.getElementById(`btn_esp_py${jugador}`).disabled = estado;
};

const reiniciarPelea = (ganador) => {
    if (ganador === 1) {
        victoriaPy1++;
        actualizarMarcador(1, victoriaPy1);
    } else if (ganador === 2) {
        victoriaPy2++;
        actualizarMarcador(2, victoriaPy2);
    }

    turnoPy1 = 0;
    turnoPy2 = 0;

    reiniciarJugador(player1);
    reiniciarJugador(player2);

    console.log("Jugador 1 - Vida:", player1.getVida(), "Ki:", player1.getKi(), "Energía:", player1.getEnergia());
    console.log("Jugador 2 - Vida:", player2.getVida(), "Ki:", player2.getKi(), "Energía:", player2.getEnergia());

    actualizarBarraEstado(1);
    actualizarBarraEstado(2);

    actualizarBotones(true, 1);
    actualizarBotones(false, 2);
};


//funciom para reiniciar jugada o ir al menu MO
const derrotado = (derrotado, img, ganadorNombre, ganador) => {
    const actualizarBarra = (tipo) => {
        const elemento = document.getElementById(`${tipo}_py${derrotado}`);
        elemento.style.width = "0%";
        elemento.innerText = "0%";
    };

    Swal.fire({
        title: ganadorNombre,
        text: "Después de un largo combate fuiste victorioso",
        width: 600,
        color: "#000",
        background: "none",
        imageUrl: `./public/img/${img}/base.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Ataque Básico",
        backdrop: "linear-gradient(255deg, rgba(63, 70, 57, 0.85) 5%, rgba(159,181,148,0.85) 54%, rgba(73,77,68,0.85) 89%)",
        showCancelButton: true,
        confirmButtonText: "Reiniciar pelea",
        cancelButtonText: "Inicio",
        allowOutsideClick: false
    }).then((result) => {
        result.isConfirmed ? reiniciarPelea(ganador) : location.reload();
    });
    ["ki", "energia", "vida"].forEach(actualizarBarra);
};

// Botones de jugador 1
document.getElementById("btn_atk_py1").addEventListener('click', async () => {    
    if (player1.getKi() < 5 || player1.getEnergia() < 10) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning"
        });
    } else {
        player1.atk_basico(player2);
        await Swal.fire({
            title: "Ataque Basico Jugador 1",
            text: ataques[pj1]["atk1"],
            width: 600,
            color: "#ffff",
            background: "none",
            imageUrl: `./public/img/${pj1}/basico.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Basico",
            backdrop: `${ataques[pj1]["color"]}`,
        });

        if (player2.getVida() <= 0) {
            derrotado(2,pj1,player1.getUser_name(),1)
        }else {
            let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
            document.getElementById("ki_py1").style.width=`${porcentaje}%`;
            document.getElementById("ki_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
            document.getElementById("energia_py1").style.width=`${porcentaje}%`;
            document.getElementById("energia_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player2.getVida())*100)/100);
            document.getElementById("vida_py2").style.width=`${porcentaje}%`;
            document.getElementById("vida_py2").innerText=`${porcentaje}%`;

            if (turnoPy1 > 0) {
                turnoPy1++;
            }
            turno(2,1,turnoPy2);
        }
    }
})

document.getElementById("btn_esp_py1").addEventListener('click',async () => {    
    if (player1.getKi() < 10 || player1.getEnergia() < 20) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning"
        });
    } else {
        player1.atk_especial(player2);
        await Swal.fire({
            title: "Ataque Basico Jugador 1",
            text: ataques[pj1]["atk2"],
            position: "center-center",
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj1}/especial.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Basico",
            backdrop: `${ataques[pj1]["color"]}`,
        });

        if (player2.getVida() <= 0) {
            derrotado(2,pj1,player1.getUser_name(),1)
        }else {
            let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
            document.getElementById("ki_py1").style.width=`${porcentaje}%`;
            document.getElementById("ki_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
            document.getElementById("energia_py1").style.width=`${porcentaje}%`;
            document.getElementById("energia_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player2.getVida())*100)/100);
            document.getElementById("vida_py2").style.width=`${porcentaje}%`;
            document.getElementById("vida_py2").innerText=`${porcentaje}%`;
        
            turnoPy1++;
            turno(2,1,turnoPy2);
        }
    }
})

document.getElementById("btn_ermi_py1").addEventListener('click',() => {
    if (player1.getSemilla() <= 0) {
        Swal.fire({
            title: "Te has quedado sin semillas",
            text: "las semillas se han acabado",
            icon: "warning"
        });
    }else {
        player1.semilla_ermi();
        let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
        document.getElementById("ki_py1").style.width=`${porcentaje}%`;
        document.getElementById("ki_py1").innerText=`${porcentaje}%`;
    
        porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
        document.getElementById("energia_py1").style.width=`${porcentaje}%`;
        document.getElementById("energia_py1").innerText=`${porcentaje}%`;
    
        porcentaje = parseInt((parseInt(player1.getVida())*100)/100);
        document.getElementById("vida_py1").style.width=`${porcentaje}%`;
        document.getElementById("vida_py1").innerText=`${porcentaje}%`;
    
        document.getElementById('se_p1').innerText = player1.getSemilla()
       
        Swal.fire({
            title: "Te has comido una semilla del ermitaño",
            text: ataques[pj1]["curar"],
            position: "center-center",
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj1}/curar.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "semilla",
            backdrop: `${ataques[pj1]["color"]}`,
        });
        if (turnoPy1 > 0) {
            turnoPy1++;
        }
        turno(2,1,turnoPy2);
    }
})

document.getElementById("btn_ki_py1").addEventListener('click',() => {
    player1.cargar_ki();
    let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
    document.getElementById("ki_py1").style.width=`${porcentaje}%`;
    document.getElementById("ki_py1").innerText=`${porcentaje}%`;

    Swal.fire({
        title: "Aumentando ki!!!",
        text: "Aumentaste tu ki",
        position: "center-center",
        width: 600,
        color: "#ececec",
        background: "none",
        imageUrl: `./public/img/${pj1}/energia.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "cargar ki",
        backdrop: `${ataques[pj1]["color"]}`,
    });
    if (turnoPy1 > 0) {
        turnoPy1++;
    }
    turno(2,1,turnoPy2);
})

// Botones de jugador 2
document.getElementById("btn_atk_py2").addEventListener('click',async () => {    
    if (player2.getKi() < 5 || player2.getEnergia() < 10) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning"
        });
    } else {
        player2.atk_basico(player1);
        await Swal.fire({
            title: "Ataque Basico Jugador 2",
            text: ataques[pj2]["atk1"],
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj2}/basico.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Basico",
            backdrop: `${ataques[pj2]["color"]}`,
        });

        if (player1.getVida() <= 0) {
            derrotado(1,pj2,player2.getUser_name(),2)
        }else { 
            let porcentaje = parseInt((parseInt(player2.getKi())*100)/80);
            document.getElementById("ki_py2").style.width=`${porcentaje}%`;
            document.getElementById("ki_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player2.getEnergia())*100/90));
            document.getElementById("energia_py2").style.width=`${porcentaje}%`;
            document.getElementById("energia_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getVida())*100)/100);
            document.getElementById("vida_py1").style.width=`${porcentaje}%`;
            document.getElementById("vida_py1").innerText=`${porcentaje}%`;
        
            if (turnoPy1 > 0) {
                turnoPy2++;
            }
            turno(1,2,turnoPy1);
        }
    }
})

document.getElementById("btn_esp_py2").addEventListener('click',async () => {    
    if (player2.getKi() < 10 || player2.getEnergia() < 20) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning"
        });
    } else {
        player2.atk_especial(player1);
        await Swal.fire({
            title: "Ataque Especial! Jugador 2",
            text: ataques[pj2]["atk2"],
            position: "center-center",
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj2}/especial.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Especial",
            backdrop: `${ataques[pj2]["color"]}`,
        });

        if (player1.getVida() <= 0) {
            derrotado(1,pj2,player2.getUser_name(),2)
        }else {
            let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
            document.getElementById("ki_py2").style.width=`${porcentaje}%`;
            document.getElementById("ki_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
            document.getElementById("energia_py2").style.width=`${porcentaje}%`;
            document.getElementById("energia_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getVida())*100)/100);
            document.getElementById("vida_py1").style.width=`${porcentaje}%`;
            document.getElementById("vida_py1").innerText=`${porcentaje}%`;
        
            turnoPy2++;
            turno(1,2,turnoPy1);
        }
    }
})

document.getElementById("btn_ermi_py2").addEventListener('click',() => {
    if (player2.getSemilla() <= 0) {
        Swal.fire({
            title: "Te has quedado sin semillas",
            text: "las semillas se han acabado",
            icon: "warning"
        });
    }else {
        player2.semilla_ermi();
        let porcentaje = parseInt((parseInt(player2.getKi())*100)/80);
        document.getElementById("ki_py2").style.width=`${porcentaje}%`;
        document.getElementById("ki_py2").innerText=`${porcentaje}%`;

        porcentaje = parseInt((parseInt(player2.getEnergia())*100/90));
        document.getElementById("energia_py2").style.width=`${porcentaje}%`;
        document.getElementById("energia_py2").innerText=`${porcentaje}%`;

        porcentaje = parseInt((parseInt(player2.getVida())*100)/100);
        document.getElementById("vida_py2").style.width=`${porcentaje}%`;
        document.getElementById("vida_py2").innerText=`${porcentaje}%`;

        document.getElementById('se_p2').innerText = player2.getSemilla()
    
        Swal.fire({
            title: "Te has comido una semilla del ermitaño",
            text: ataques[pj2]["curar"],
            position: "center-center",
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj2}/curar.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "semilla",
            backdrop: `${ataques[pj2]["color"]}`,
        });
        if (turnoPy2 > 0) {
            turnoPy2++;
        }
        turno(1,2,turnoPy1);
    }
})

document.getElementById("btn_ki_py2").addEventListener('click',() => {
    player2.cargar_ki();
    let porcentaje = parseInt((parseInt(player2.getKi())*100)/80);
    document.getElementById("ki_py2").style.width=`${porcentaje}%`;
    document.getElementById("ki_py2").innerText=`${porcentaje}%`;

    Swal.fire({
        title: "Aumentando ki!!!",
        text: "Aumentaste tu ki",
        position: "center-center",
        width: 600,
        color: "#ececec",
        background: "none",
        imageUrl: `./public/img/${pj2}/energia.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "cargar ki",
        backdrop: `${ataques[pj2]["color"]}`,
    });
    if (turnoPy2 > 0) {
        turnoPy2++;
    }
    turno(1,2,turnoPy1);
})