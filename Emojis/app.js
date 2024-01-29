//Funcion Conversora de Emociones a Emojis

let emocionesPalabras = ["feliz", "alegre", "triste", "sorprendida", "enojada"];

for (let i = 0; i < emocionesPalabras.length; i++) {
    if (emocionesPalabras[i] === 'feliz') {
      console.log('Soy Feliz 😃')
    } else if (emocionesPalabras[i] === 'alegre') {
        console.log('Me siento Alegre 😄')
    } else if (emocionesPalabras[i] === 'triste') {
        console.log('Estoy Triste 😢')
    } else if (emocionesPalabras[i] === 'sorprendida') {
        console.log('Estoy Sorprendida 😲')
    } else if (emocionesPalabras[i] === 'enojada') {
        console.log('Estoy Enojada 🤯')
    }
}
