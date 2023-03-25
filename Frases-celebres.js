const frasesCelebres = [
    {
        Autor: "Albert Einstein.",
        img:"Albert.jpg",
        Frase: "No tengo talentos especiales. Solo soy apasionadamente curioso.",
    },
    {
        Autor: "Bernard Fontenelle.",
        img:"Bernard.jpg",
        Frase: "No os toméis la vida demasiado en serio; de todas maneras, no saldréis vivos de esta.",
    },
    {
        Autor: "Steve Jobs.",
        img:"Steve.jpg",
        Frase: "Cada día me pregunto: «Si hoy fuese el último día de mi vida, ¿querría hacer lo que voy a hacer hoy?». Si la respuesta es «No» durante demasiados días seguidos, sé que necesito cambiar algo.",
    },
    {
        Autor: "Dwight Einsnhower.",
        img:"Dwight.jpg",
        Frase: "El mundo pertenece a los optimistas; los pesimistas son meros espectadores.",
    },
    {
        Autor: "Agatha Christie.",
        img:"Agatha.jpg",
        Frase: "Aprendí que no se puede dar marcha atrás, que la esencia de la vida es ir hacia adelante.",
    },
    {
        Autor: "Pearl S. Buck.",
        img:"Pearl.jpg",
        Frase: "Muchas personas no gozan de las pequeñas alegrías, porque esperan la gran felicidad.",
    },
    {
        Autor: "Henry Ford.",
        img:"Henry.jpg",
        Frase: "Si tú crees que puedes, puedes. Si tú crees que no puedes, no puedes. Tanto si piensas una cosa como la otra, estás en lo cierto.",
    },
    {
        Autor: "Franklin D. Roosvelt.",
        img:"franklin.jpg",
        Frase: "En la vida hay algo peor que el fracaso: el no haber intentado nada.",
    },
    {
        Autor: "Fiódor Dostoioevski.",
        img:"Fiodor.jpeg",
        Frase: "El secreto de la existencia humana no solo está en vivir, sino también en saber para qué se vive.",
    },
    {
        Autor: "Isaac Newton.",
        img:"isaac.jpg",
        Frase: "Construimos demasiados muros y no suficientes puentes.",
    },
];
function generaFrase() {
    const frase = Math.floor(Math.random()*frasesCelebres.length);
    const fraseGenerada = frasesCelebres[frase];
    const fraseAleatoria = `<img src="${fraseGenerada.img}"> <p>"${fraseGenerada.Frase}"</p> <p>-${fraseGenerada.Autor}</p>`;
    document.getElementById('fraseGenerada').innerHTML = fraseAleatoria;
    
    return fraseAleatoria;
}
