//Generador de Planetas Fantásticos
let planetas = ["planeta1", "planeta2", "planeta3"]


let mensaje = array => {
    for (i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                console.log("Plantea Ornizon: ubicado en la galaxia Orni, posee un color violeta con destellos plateados. No posee atmosfera y gira infinitamente sobre su propio eje a gran velocidad lo que genera los destellos en su entorno ");
                break;
            case 1:
                console.log("Planeta Goldin: pertenece a la galaxia Gold, recientes descubrimientos informan la presencia de vida extraterrestre. El planeta posee montañas de oro, plata y otros metales preciosos.");
                break;
            case 2:
                console.log("Planeta Green: ubicado en la via lactea, posee valles y selvas con arboles exoticos predomina el color azul en la vegetacion. Posee mares de color verde.");
                break;
        }
    }
}

mensaje(planetas)