const MyTitle = document.getElementById('MyTitle');
const MyImage = document.getElementById('MyImage');

let seizoenen = [
    {
        "titel":"Seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"black"
    },
    {
        "titel":"Lente",
        "image":"img/spring.jpg",
        "backGround":"pink"
    },
    {
        "titel":"Zomer",
        "image":"img/summer.jpg",
        "backGround":"yellow"
    },
    {
        "titel":"Herfst",
        "image":"img/autumn.jpg",
        "backGround":"orange"
    },
    {
        "titel":"Winter",
        "image":"img/winter.jpg",
        "backGround":"white"
    }
];


//let seizoen = {
//    "titel":"lente",
//    "image":"img/spring.jpg"
//};

function show(index){
    MyTitle.innerHTML = seizoenen[index].titel;
    MyImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
}
