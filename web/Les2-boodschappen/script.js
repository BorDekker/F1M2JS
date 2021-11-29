console.log("Script is geladen!");

const Groentevak = document.getElementById('Groente');
const Fruitvak = document.getElementById('Fruit');

function ZetInFruitLa(Fruit){
    console.log(Fruit)

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = Fruit;
    nieuwElement.className = 'rood';
    Fruitvak.appendChild(nieuwElement);
}

function ZetInGroenteLa(Groente){
    console.log(Groente)

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = Groente;
    nieuwElement.className = 'groen';
    Groentevak.appendChild(nieuwElement);
}
