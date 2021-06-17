// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

const gattini = [
    {
        nome:"Alfredo",
        eta:"2",
        colore:"Blu",
        sesso:"F"
    },
    {
        nome:"Alfredo",
        eta:"2",
        colore:"Blu",
        sesso:"F"
    },
    {
        nome:"Alfredo",
        eta:"2",
        colore:"Blu",
        sesso:"F"
    },
    {
        nome:"Alfredo",
        eta:"2",
        colore:"Blu",
        sesso:"F"
    },
    {
        nome:"Alfredo",
        eta:"2",
        colore:"Blu",
        sesso:"F"
    },
    {
        nome:"Alfredo",
        eta:"2",
        colore:"Blu",
        sesso:"F"
    },
    {
        nome:"Alfredo",
        eta:"2",
        colore:"Blu",
        sesso:"F"
    },
    {
        nome:"Alfredo",
        eta:"2",
        colore:"Blu",
        sesso:"F"
    },
    {
        nome:"Alfredo",
        eta:"2",
        colore:"Blu",
        sesso:"F"
    },
    {
        nome:"Alfredo",
        eta:"2",
        colore:"Blu",
        sesso:"F"
    },
];

gattini.forEach(e => {
    document.getElementById("text").innerHTML += 
    `
        <li>
            ${e.nome}
            <ul>
                <li>
                Colore: ${e.colore}
                </li>
            <ul>
        </li>
    `;
});