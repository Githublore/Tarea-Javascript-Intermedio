//Generador de Historias Absurdas

let historias = ["historia1", "historia2", "historia3"]


let mensaje = array => {
    for (i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                console.log("En fotos satelitales, se detectaron en el plantea Marte, perros conduciendo motocicletas");
                break;
            case 1:
                console.log("En Amazonas existen arboles que hablan con los turistas");
                break;
            case 2:
                console.log("Recientes estudios indican que los gatos pueden volar");
                break;
        }
    }
}

mensaje(historias)