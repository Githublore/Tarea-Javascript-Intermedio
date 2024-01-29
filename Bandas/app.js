//Creador de Nombres de Bandas Aleatorios

let bandas = ["banda1", "bandas2", "bandas3"]


let mensaje = array => {
    for (i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                console.log("1.Perros Azules 2.Noches Electricas 3.Dark Punk");
                break;
            case 1:
                console.log("1.Gatos Verdes 2.Rock Full Stack 3.Mentes Indomables");
                break;
            case 2:
                console.log("1.Pink Rock 2.Musica Interestelar 3.Circuito Infinito");
                break;
        }
    }
}

mensaje(bandas)