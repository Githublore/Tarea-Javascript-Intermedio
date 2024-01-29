//Creador de Recetas Culinarias del Futuro

let recetas = ["receta1", "receta2", "receta3"]


let mensaje = array => {
    for (i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                console.log("Receta Culinaria Futurista 1: a.Cocinar a fuego lento rocas lunares b.Añadir luz de luna c. Condimentar con polvo de estrellas d. Servir acompañado de ensalada de marcianos");
                break;
            case 1:
                console.log("Receta Culinaria Futurista 2: a.Hervir aletas de leon persa b. Agregar tierra del Amazona central c. Condimentar con lagrimas de cocodrillo d. Servir acompañado de rocio interestelar");
                break;
            case 2:
                console.log("Receta Culinaria Futurista 3: a.Colocar en el horno en una placa, capa de ozono b.Añadir lava volcanica c. Condimentar destellos solares d. Servir acompañado con pestañas de calamar azul");
                break;
        }
    }
}

mensaje(recetas)