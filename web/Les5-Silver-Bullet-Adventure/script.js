const MyTitle = document.getElementById('MyTitle');
const MyImage = document.getElementById('MyImage');
const MyInput = document.getElementById('MyInput');

let directionButtons = {
    "Noord":document.getElementById('KnopNoord'),
    "West":document.getElementById('KnopWest'),
    "Oost":document.getElementById('KnopOost'),
    "Zuid":document.getElementById('KnopZuid')
}

 let current_index = 0;

let locations = [ // Array
    { //0 = Object
        "Title":"Ingang Silver Bullet",
        "Image":"img/0.jpg",
        "directions": {
            "Zuid": 1
        }
    },
    { //1 = Object
        "Title":"Gang bij docentenkamer",
        "Image":"img/1.jpg",
        "directions": { // Object
            "Noord": 0,
            "West": 2,
            "Oost": 5,
            "Zuid": 4
        }
    },
    {
        "Title":"Gang voor de trap",
        "Image":"img/2.jpg",
        "directions": {
            "Zuid": 3,
            "Oost": 1
        }
    },
    {
        "Title":"C0.95",
        "Image":"img/3.jpg",
        "directions": {
            "Noord": 2
        }
    },
    {
        "Title":"Docentenkamer/C0.91",
        "Image":"img/4.jpg",
        "directions": {
            "Noord": 1
        }
    },
    {
        "Title":"De Gang",
        "Image":"img/5.jpg",
        "directions": {
            "Noord": 10,
            "Oost": 6
        }
    },
    {
        "Title":"Ingang toilet",
        "Image":"img/6.jpg",
        "directions": {
            "Oost": 7,
            "Zuid": 11
        }
    },
    {
        "Title":"Ingang C0.93",
        "Image":"img/7.jpg",
        "directions": {
            "Noord": 9,
            "Zuid": 8,
            "West": 6
        }
    },
    {
        "Title":"C0.93",
        "Image":"img/8.jpg",
        "directions": {
            "Noord": 7
        }
    },
    {
        "Title":"C0.92",
        "Image":"img/9.jpg",
        "directions": {
            "Zuid": 7,
            "West": 10
        }
    },
    {
        "Title":"C0.90",
        "Image":"img/10.jpg",
        "directions": {
            "Oost": 9,
            "Zuid": 5
        }
    },
    {
        "Title":"Uitgang toilet",
        "Image":"img/11.jpg",
        "directions": {
            "Noord": 6
        }
    }
]
//MyTitle.innerHTML = "Dit is door het script toegevoegd";
//MyImage.src = "img/1.jpg"

function show(index){
    MyTitle.innerHTML = locations[index].Title;
    MyImage.src = locations[index].Image;
    current_index = index;

    //Knoppen opnieuw berekenen
    UpdateDirections();
}

function UpdateDirections(){
    // Haal de mogelijke directions op voor de curren_index
    let possible = locations[current_index].directions;

    // Zet de direction keys in een aparte variabele
    let possible_keys = Object.keys(possible);

    // Haal de keys op van de buttons in een aparte  variabele
    let button_keys = Object.keys(directionButtons);

    // Zet eerst alle knoppen uit
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    // Zet nu de mogelijke knoppen (directions) aan
    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    }
}

function GetInput(){
    show(MyInput.value);
    //console.log(MyInput.value)
    MyInput.value = "";
    MyInput.focus();
}

function GoDirection(direction){
    let punt_index = locations[current_index].directions[direction];
    show(punt_index);
}

show(0);
