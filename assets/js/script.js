function openMenu() {
    let line = document.getElementById('cabecalho');

    if(line.className === 'cabecalho') {
        line.className += '  cabecalho--js';
        document.querySelector('.menu__icone').innerHTML = '&times;'
    } 
    else {
        line.className = 'cabecalho';
        document.querySelector('.menu__icone').innerHTML = '&#9776;'
    }
}


