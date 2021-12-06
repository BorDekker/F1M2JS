const MyPainting = document.getElementById('MyPainting')
const MyTitles = document.getElementById('MyTitles')
const MyInformation = document.getElementById('MyInformation')

let Paintings = [
    "Paintings/painting0.jpg", 
    "Paintings/painting1.jpg", 
    "Paintings/painting2.jpg", 
    "Paintings/painting3.jpg", 
    "Paintings/painting4.jpg", 
    "Paintings/painting5.jpg"
]

let Titles = [
    "De Schilderijen van Van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rhone",
    "Zonnebloemen",
    "Boerderij in de Provence"
]

let Information = [
    "De mooieste schilderijen van Van Gogh",
    "November 1888, Pesjkinmuseum, Moskouw",
    "Juni 1889, Museum of Modern Art, New York",
    "September 1888, Musée d'Orsay, Parijs",
    "Januari 1889, Neue Pinakothek, Munchen",
    "September 1888, National Gallery of Art, Washington D.C."
]

function ChangePainting(index){
    MyInformation.innerHTML = Information[index];
    MyTitles.innerHTML = Titles[index];
    MyPainting.src = Paintings[index];
}
