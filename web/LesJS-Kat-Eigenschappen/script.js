const kat1= {
    naam: "Artie",
    leeftijd: "5(In katten jaren)",
    hobbies: ["Slapen op het venster en de bank", "Spelen met katten speelgoed", "Kattenvoer eten"],
    kleur: "Blond, zwart en wit",
    foto: "Images/Kat.jpg"
}

const cat1 = {
    naam: "Kitty",
    geslacht: "V",
    leeftijd: 1,
    afbeelding: "https://placekitten.com/400/300",
}
const cat2 = {
    naam: "Boris",
    geslacht: "M",
    leeftijd: 2,
    afbeelding: "https://placekitten.com/401/300",
}
const cat3 = {
    naam: "Dexter",
    geslacht: "M",
    leeftijd: 7,
    afbeelding: "https://placekitten.com/402/300",
}
const cat4 = {
    naam: "Neeltje",
    geslacht: "V",
    leeftijd: 6,
    afbeelding: "https://placekitten.com/403/300",
}

console.log(kat1.naam);
console.log(kat1.leeftijd);
console.log(kat1.hobbies);
console.log(kat1.kleur);
console.log(kat1.foto);
const kat = document.getElementById('kat');
kat.src = kat1.foto

console.log(cat1.naam);
console.log(cat1.geslacht);
console.log(cat1.leeftijd);
console.log(cat1.afbeelding);
const poes1 = document.getElementById('poes1');
poes1.src = cat1.afbeelding

console.log(cat2.naam);
console.log(cat2.geslacht);
console.log(cat2.leeftijd);
console.log(cat2.afbeelding);
const poes2 = document.getElementById('poes2');
poes2.src = cat2.afbeelding

console.log(cat3.naam);
console.log(cat3.geslacht);
console.log(cat3.leeftijd);
console.log(cat3.afbeelding);
const poes3 = document.getElementById('poes3');
poes3.src = cat3.afbeelding

console.log(cat4.naam);
console.log(cat4.geslacht);
console.log(cat4.leeftijd);
console.log(cat4.afbeelding);
const poes4 = document.getElementById('poes4');
poes4.src = cat4.afbeelding