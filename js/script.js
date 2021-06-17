// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
const randomTra = (x, y) => parseInt(Math.floor(Math.random() * (y - x) ) + x);
const coloriNormalissimi = ["#EEB61D", "#7AC76B", "#029353", "#E61C40", "#6FC6FF", "#3706FF","#A388B7", "#00B622", "#7DED30", "#89D085", "#AA8154", "#92137B", "#DD3821", "#FAFA49", "#02E4AC", "#FCAB88", "#FA89F1", "#FB8202", "#A63532", "#9C55C1"];


const gattini = [
    {
        nome:"Carola",
        eta: 1,
        colore:coloriNormalissimi[randomTra(0,19)],
        sesso:"F"
    },
    {
        nome:"Luna",
        eta:5,
        colore:coloriNormalissimi[randomTra(0,19)],
        sesso:"F"
    },
    {
        nome:"Gianni",
        eta:3,
        colore:coloriNormalissimi[randomTra(0,19)],
        sesso:"M"
    },
    {
        nome:"Agapito",
        eta:12,
        colore:coloriNormalissimi[randomTra(0,19)],
        sesso:"M"
    },
    {
        nome:"Vito",
        eta:8,
        colore:coloriNormalissimi[randomTra(0,19)],
        sesso:"M"
    },
    {
        nome:"Bartolomeo",
        eta:15,
        colore:coloriNormalissimi[randomTra(0,19)],
        sesso:"M"
    },
    {
        nome:"Angela",
        eta:13,
        colore:coloriNormalissimi[randomTra(0,19)],
        sesso:"F"
    },
    {
        nome:"Sammy",
        eta:8,
        colore:coloriNormalissimi[randomTra(0,19)],
        sesso:"M"
    },
    {
        nome:"Gaia",
        eta:2,
        colore:coloriNormalissimi[randomTra(0,19)],
        sesso:"F"
    },
    {
        nome:"Selvaggia",
        eta:16,
        colore:coloriNormalissimi[randomTra(0,19)],
        sesso:"F"
    },
];
document.getElementById("milestone1").innerHTML = `<h2>Milestone 1</h2>`

gattini.forEach((gattino) => document.getElementById("text").innerHTML +=
    `
        <li>
        ${gattino.nome} <i class="fas fa-cat" style="color:${gattino.colore}"></i>
        </li>
    `
);

const gattini2 = gattini.map((gatto) => {
    const nome = gatto.nome;
    const eta = gatto.eta;
    const colore = gatto.colore;
    const sesso = gatto.sesso;

    const opacita = gatto.eta / 16;
    let coloreFiocco = "#e94c86";
    if (gatto.sesso == "M") {
        coloreFiocco = "#40aedf"
    }

    return {
        nome,
        eta,
        colore,
        sesso,
        fiocchetto: {
            coloreFiocco,
            opacita
        }
    }
}

);

document.getElementById("milestone2").innerHTML = `<br><br><h2>Milestone 2</h2>`

gattini2.forEach((gattino) => document.getElementById("text2").innerHTML +=
    `
        <li>
        ${gattino.nome} <i class="fas fa-cat" style="color:${gattino.colore}"></i>
        <i class="fas fa-award" style="color:${gattino.fiocchetto.coloreFiocco}; opacity:${gattino.fiocchetto.opacita}"></i>
        </li>
    `
);

const gattiM = gattini2.filter((element) => element.sesso == "M");
const gattiF = gattini2.filter((element) => element.sesso == "F");
let gattiFM = [...gattiF, ...gattiM];
const gattini3 = gattiFM.map((gatto) => {
    const {nome, colore, fiocchetto} = gatto;
    return {
        nome,
        colore,
        fiocchetto
    }
})
console.log(gattini3) // per controllare che non ci sia l'età, visto che non compare comunque nella lista stampata
document.getElementById("milestone3").innerHTML = `<br><br><h2>Milestone 3</h2>`

gattini3.forEach((gattino) => document.getElementById("text3").innerHTML +=
    `
        <li>
        ${gattino.nome} <i class="fas fa-cat" style="color:${gattino.colore}"></i>
        <i class="fas fa-award" style="color:${gattino.fiocchetto.coloreFiocco}; opacity:${gattino.fiocchetto.opacita}"></i>
        </li>
    `
);