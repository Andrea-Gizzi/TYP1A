// Variabili globali
let categoria = 'categoria';


// Cambio filtro
function changeFilter(newFilter) {
    categoria = newFilter;
    run();

    document.querySelectorAll('#buttons button').forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(newFilter + 'Button').classList.add('active');
}


// Funzione principale
async function run() {
    let data;

    // Caricamento dati JSON
    await fetch("../assets/data/100_font.json")
        .then(response => response.json())
        .then(json => {
            data = json;
        });
            
    // Ordinamento dei dati
    if (categoria === 'categoria') {
        data.sort(function(elementoA, elementoB) {
            if (elementoA.categoria < elementoB.categoria) return -1;
            if (elementoA.categoria > elementoB.categoria) return 1;
            if (elementoA.sottocategoria < elementoB.sottocategoria) return -1;
            if (elementoA.sottocategoria > elementoB.sottocategoria) return 1;
            return 0;
        });
    } 

    if (categoria === 'luogo') {
        data.sort(function(elementoA, elementoB) {
            if (elementoA.luogo < elementoB.luogo) return -1;
            if (elementoA.luogo > elementoB.luogo) return 1;
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
        

    // Render metadati
    let output = "";
    for (let i = 0; i < data.length; i++) {

        output += "<div class='riga'>";

        output += "<div class='font'>" + data[i].font + "</div>";
        output += "<div class='categoria'>" + data[i].categoria + "</div>";
        output += "<div class='sottocategoria'>" + data[i].sottocategoria + "</div>";
        output += "<div class='autore'>" + data[i].autore + "</div>";
        output += "<div class='anno'>" + data[i].data + "</div>";
        output += "<div class='luogo'>" + data[i].luogo + "</div>";
        output += "<div class='utilizzo'>" + data[i].utilizzo + "</div>";
        
        output += "</div>";
        }

        document.querySelector('main').innerHTML = output;
    }

// Caricamento della finestra
window.onload = function() {
    document.getElementById('categoriaButton').classList.add('active');
    changeFilter('categoria');
};