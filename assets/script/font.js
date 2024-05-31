let categoria = 'categoria';
let caratteri = "abcdefghijklmnopqrstuvwxyz0123456789";
let lettera = caratteri.charAt(Math.floor(Math.random() * caratteri.length));
let uppercase = false;


function changeFilter(newFilter) {
    categoria = newFilter;

    if (newFilter == '') {
        newFilter = 'all';
    }

    console.log(newFilter);
    run();

    document.querySelectorAll('#buttons button').forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(newFilter + 'Button').classList.add('active');
}


async function run() {
    let data;

    await fetch("./assets/data/100_font.json")
        .then(function(r) { return r.json() })
        .then(json => {
            data = json;
        });

    mio_container = document.getElementById('test');

    //SORT
    if (categoria === 'categoria') {
        data.sort(function(elementoA, elementoB) {
            if (elementoA.sottocategoria < elementoB.sottocategoria) return -1;
            if (elementoA.sottocategoria > elementoB.sottocategoria) return 1;
            return 0;
        });
    } 

    if (categoria === 'luogo') {
        data.sort(function(elementoA, elementoB) {
            if (elementoA.font < elementoB.font) return -1;
            if (elementoA.font > elementoB.font) return 1;
            return 0;
        });
    } 

    if (categoria === 'periodo') {
        data.sort(function(elementoA, elementoB) {
            if (elementoA.data < elementoB.data) return -1;
            if (elementoA.data > elementoB.data) return 1;
            return 0;
        });
    } 

    //CATEGORIE
    let categorie = [];
    for (let i = 0; i < data.length; i++) {
        if (!categorie.includes(data[i][categoria])) {
            categorie.push(data[i][categoria]);
        }
    }

    console.log(categorie);
    let cats = "";
    categorie.sort();

    for (let i = 0; i < categorie.length; i++) {
        if (categorie.length > 1) {
            cats += "<h1>" + categorie[i] + "</h1>";
        } else {
            cats += "<h1>&nbsp;</h1>";
        }
        cats += "<div class='categoria' id='" + categorie[i] + "'></div>";
    }

    document.querySelector('main').innerHTML = cats;
    mio_input = document.getElementById("input_utente");
    mio_input.addEventListener("input", getLetter);

    mio_input.addEventListener("keyup", function() {
        let inputValue = mio_input.value.trim();
        if (inputValue === '' || inputValue === 'error') {
            return;
        }

        if (inputValue === inputValue.toUpperCase()) {
            uppercase = true;
            render_letter(lettera, uppercase);
        } else {
            uppercase = false;
            render_letter(lettera, uppercase);
        }

        let up_case = document.getElementById('up'); // Aggiorna la referenza
        if (uppercase) {
            up_case.classList.remove('uppercase-inactive');
            up_case.classList.add('uppercase-active');
            up_case.innerHTML = '<i class="bi bi-shift-fill"></i>';
        } else {
            up_case.classList.remove('uppercase-active');
            up_case.classList.add('uppercase-inactive');
            up_case.innerHTML = '<i class="bi bi-shift"></i>';
        }
    });

    render_letter(lettera);

    function getLetter() {
        let input_value = document.getElementById("input_utente").value.trim();
        if (input_value === '') {
            return;
        }
        lettera = input_value;
        console.log(lettera);

        if (caratteri.indexOf(lettera) > 1) {
            console.log(lettera);
            render_letter(lettera); // uppercase
        }
    }


    let up_case = document.getElementById('up');
    up_case.addEventListener("click", function(){
        if (uppercase == false || uppercase == undefined){
            uppercase = true;
        } else {
            uppercase = false;
        }
        if (lettera == ''){
            lettera =  caratteri.charAt(Math.floor(Math.random() * caratteri.length));
        }
        render_letter(lettera, uppercase);
        console.log(lettera, uppercase);
    });



    function render_letter(lettera, uppercase) {
        let categorie = document.getElementsByClassName('categoria');
        console.log(lettera, uppercase);

        for (let i = 0; i < categorie.length; i++) {
            categorie[i].innerHTML = '';
        }

        for (let i = 0; i < data.length; i++) {
            let container = document.getElementById(data[i][categoria]);
            let output = "";
            let case_ = '';
            
            if (isNaN(lettera) == true) {
                if (uppercase == false || uppercase == undefined) {
                    case_ = '';
                } else {
                    case_ = '_upper';
                }
            }
            nome_font = data[i].font;
            nome_file =  lettera + case_  + '.png';
            output += "<div class='info'>";
            output += '<img src=./assets/imgs/' + nome_font + '/' + nome_file + '>';
            output += "<div class='metadata'>";
            output += "<span>" + data[i].font + "</span>";
            output += "<span>" + data[i].categoria + "</span>";
            output += "<span>" + data[i].sottocategoria + "</span>";
            output += "<span>" + data[i].autore + "</span>";
            output += "<span>" + data[i].data + "</span>";
            output += "<span>" + data[i].luogo + "</span>";
            output += "<span>" + data[i].utilizzo + "</span>";
            output += "</div>";
            output += '</div>';
            container.innerHTML += output;
        }
        
    }
}


//CATEGORIA STANDARD PAGINA
window.onload = function() {
    document.getElementById('categoriaButton').classList.add('active');
    changeFilter('categoria');
    
    let up_case = document.getElementById('up'); // Aggiorna la referenza
    up_case.classList.add('uppercase-inactive');
    up_case.innerHTML = '<i class="bi bi-shift"></i>';
};