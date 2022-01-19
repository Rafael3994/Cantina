document.getElementById("back-to-index").onclick = function () { location.href = "index.php"; };

    document.getElementById("send-order").onclick = function () { 
                
        let comandamenu = new Map();
    
        let nomPlat1 = document.getElementById('primer-plat-name').innerHTML;
        let nomPlat2 = document.getElementById('segon-plat-name').innerHTML;
        let nomPostre = document.getElementById('postre-name').innerHTML;


        if (nomPlat1 != '') {
            comandamenu[nomPlat1] = 1;
        }
        if (nomPlat2 != '') {
            comandamenu[nomPlat2] = 1;
        }
        if (nomPostre != '') {
            comandamenu[nomPostre] = 1;
        }
    
        if (nomPlat1 == '' && nomPlat2 == '' && nomPostre == '') {  
            alert('Selecciona algun producte, carallot!');
        }
        else if (nomPlat1 == '' &&  nomPlat2 == '' || nomPlat1 == '' &&  nomPostre == '' || nomPlat2 == '' &&  nomPostre == '') {
            alert(`Ok Boomer, però agafa un producte més. De bon rollo t'ho dic`);
        }
        else {
            localStorage.setItem('comanda', JSON.stringify(comandamenu));
            location.href = "formulari.php";
        }
    };

    document.getElementById("send-order").onclick = function () {   
        let comandamati = new Map();
        let stored = document.getElementById('zona1').getElementsByTagName('div');
        if (stored) {
            let preus;
            for (let i = 0; i < stored.length; i++) {
                const element = stored[i];
                let producte = element.childNodes[0].innerHTML;
                producte = producte.split(" x");
                comandamati[producte[0]] = element.childNodes[1].innerHTML;
            }
        }
        stored = document.getElementById('zona2').getElementsByTagName('div');
        if (stored) {
            let preus;
            for (let i = 0; i < stored.length; i++) {
                const element = stored[i];
                let producte = element.childNodes[0].innerHTML;
                producte = producte.split(" x");
                comandamati[producte[0]] = element.childNodes[1].innerHTML;
            }
        }
        stored = document.getElementById('zona3').getElementsByTagName('div');
        if (stored) {
            let preus;
            for (let i = 0; i < stored.length; i++) {
                const element = stored[i];
                let producte = element.childNodes[0].innerHTML;
                producte = producte.split(" x");
                comandamati[producte[0]] = element.childNodes[1].innerHTML;
            }
        }
        let map = JSON.stringify(comandamati);
        if (map[1] === '}') {
            alert('Selecciona algun producte, carallot!');
        }
        else {
            localStorage.setItem('comanda', JSON.stringify(comandamati));
            location.href = "formulari.php";
        }
    
    };

function totalPrice() {

    let element1 = document.getElementById('primer-plat-price').innerHTML;
    let preus = element1.split("€");
    let preuPlat1;

    if (element1 != '') {
        preuPlat1 = preus[0];
    } else {
        preuPlat1 = '0.00';
    }

    let element2= document.getElementById('segon-plat-price').innerHTML;
    preus = element2.split("€");
    let preuPlat2;

    if (element2 != '') {
        preuPlat2 = preus[0];
    } else {
        preuPlat2 = '0.00';
    }

    let element3= document.getElementById('postre-price').innerHTML;
    preus = element3.split("€");
    let preuPostre = preus[0];

    if (element3 != '') {
        preuPostre = preus[0];
    } else {
        preuPostre = '0.00';
    }

    let preuFinal = parseFloat(preuPlat1) + parseFloat(preuPlat2) + parseFloat(preuPostre);
    document.getElementById('send-order').innerHTML = `PREU ${preuFinal.toFixed(2)} €`;

}

function totalPriceCarta() {
    let stored = document.getElementById('zona1').getElementsByTagName('div');
    let preu1 = 0;

    if (stored) {
        let preus;
        for (let i = 0; i < stored.length; i++) {
            const element = stored[i];
            let text1 = element.childNodes[2].innerHTML;
            text1 = text1.split("€");
            preu1 += parseFloat(text1[0]);
        }
    }
    stored = document.getElementById('zona2').getElementsByTagName('div');

    let preu2 = 0;

    if (stored) {
        let preus;
        for (let i = 0; i < stored.length; i++) {
            const element = stored[i];
            let text1 = element.childNodes[2].innerHTML;
            text1 = text1.split("€");
            preu1 += parseFloat(text1[0]);
        }
    }
    stored = document.getElementById('zona3').getElementsByTagName('div');

    let preu3 = 0;

    if (stored) {
        let preus;
        for (let i = 0; i < stored.length; i++) {
            const element = stored[i];
            let text1 = element.childNodes[2].innerHTML;
            text1 = text1.split("€");
            preu1 += parseFloat(text1[0]);
        }
    }
    let preuFinal = parseFloat(preu1) + parseFloat(preu2) + parseFloat(preu3);
    document.getElementById('send-order').innerHTML = `PREU ${preuFinal.toFixed(2)} €`;
}

function addToMenu(element) {
    let id = element.id;

    if (element.style.backgroundColor != 'transparent') {
        if(id == 'menu_a1' || id == 'menu_a2' || id == 'menu_a3' || id == 'menu_a4'){
            let nom = element.getElementsByTagName("p")[0].innerText;
            document.getElementById('primer-plat-name').innerHTML = nom;
        
            let preu = element.getElementsByTagName("p")[1].innerText;
            document.getElementById('primer-plat-price').innerHTML = preu;
        }
        else if(id == 'menu_b1' || id == 'menu_b2' || id == 'menu_b3' || id == 'menu_b4'){
            let nom = element.getElementsByTagName("p")[0].innerText;
            document.getElementById('segon-plat-name').innerHTML = nom;
        
            let preu = element.getElementsByTagName("p")[1].innerText;
            document.getElementById('segon-plat-price').innerHTML = preu;
        }
        else{
            let nom = element.getElementsByTagName("p")[0].innerText;
            document.getElementById('postre-name').innerHTML = nom;
        
            let preu = element.getElementsByTagName("p")[1].innerText;
            document.getElementById('postre-price').innerHTML = preu;
        }
    }

}

function addToCarta(element) {
    let id = element.id + 'b';
    let unitats = element.innerHTML;
    let parentOfparent = element.parentElement.parentElement;
    let nom = parentOfparent.childNodes[0].innerHTML + ' x ' + unitats;
    let preu = (parseFloat(parentOfparent.childNodes[1].innerHTML) * parseFloat(element.innerHTML)).toFixed(2) + ' €';

    function addRemove(id, unitats, nom, preu, area) {
        let ifExist = document.getElementById(`${id}`);
        if (ifExist) {
            if (unitats == 0) {
                ifExist.remove();
            } else {
                ifExist.remove();
                area.insertAdjacentHTML('beforeend', `<div id="${id}" class="row-price"><p>${nom}</p><p style="display: none">${unitats}</p><p>${preu}</p></div>`);
            }
        } else {
            area.insertAdjacentHTML('beforeend', `<div id="${id}" class="row-price"><p>${nom}</p><p style="display: none">${unitats}</p><p>${preu}</p></div>`);
        }
    }

    if(id == 'num1b' || id == 'num2b' || id == 'num3b' || id == 'num4b'){
        let area = document.getElementById('zona1');
        addRemove(id, unitats, nom, preu, area);
    }
    else if(id == 'num5b' || id == 'num6b' || id == 'num7b' || id == 'num8b'){
        let area = document.getElementById('zona2');
        addRemove(id, unitats, nom, preu, area);
    }
    else{
        let area = document.getElementById('zona3');
        addRemove(id, unitats, nom, preu, area);
    }

}

function canviElementMenu(element) {
    let nomPlat = element.getElementsByTagName("p")[0].innerHTML;
    let id = element.id;
    let primerPlat = document.getElementById('primer-plat-name');
    let segonPlat = document.getElementById('segon-plat-name');
    let postre = document.getElementById('postre-name');
    
    if (nomPlat == primerPlat.innerHTML) {
        element.style.backgroundColor = 'transparent';
        primerPlat.innerHTML = ''
        document.getElementById('primer-plat-price').innerHTML = '';
        elementInnerHTMLIsEmpty(primerPlat);
    }
    else if (nomPlat == segonPlat.innerHTML) {
        element.style.backgroundColor = 'transparent';
        segonPlat.innerHTML = '';
        document.getElementById('segon-plat-price').innerHTML = '';
        elementInnerHTMLIsEmpty(segonPlat);
    }
    else if (nomPlat == postre.innerHTML) {
        element.style.backgroundColor = 'transparent';
        postre.innerHTML = '';
        document.getElementById('postre-price').innerHTML = '';
        elementInnerHTMLIsEmpty(postre);
    }
    else {
        if(id == 'menu_a1' || id == 'menu_a2' || id == 'menu_a3' || id == 'menu_a4'){
            document.getElementById("menu_a1").style.backgroundColor = 'transparent';
            document.getElementById("menu_a2").style.backgroundColor = 'transparent';
            document.getElementById("menu_a3").style.backgroundColor = 'transparent';
            document.getElementById("menu_a4").style.backgroundColor = 'transparent';
            element.style.backgroundColor = 'var(--main-color-transparent)';
        }
        else if(id == 'menu_b1' || id == 'menu_b2' || id == 'menu_b3' || id == 'menu_b4'){
            document.getElementById("menu_b1").style.backgroundColor = 'transparent';
            document.getElementById("menu_b2").style.backgroundColor = 'transparent';
            document.getElementById("menu_b3").style.backgroundColor = 'transparent';
            document.getElementById("menu_b4").style.backgroundColor = 'transparent';
            element.style.backgroundColor = 'var(--main-color-transparent)';
        }
        else{
            document.getElementById("menu_c1").style.backgroundColor = 'transparent';
            document.getElementById("menu_c2").style.backgroundColor = 'transparent';
            document.getElementById("menu_c3").style.backgroundColor = 'transparent';
            document.getElementById("menu_c4").style.backgroundColor = 'transparent';
            element.style.backgroundColor = 'var(--main-color-transparent)';
        }
    }

}

function elementInnerHTMLIsNotEmpty(element){
    if (element.innerHTML != '') {
        let parentOfparent = element.parentElement.parentElement;
        parentOfparent.firstChild.nextSibling.style.color = 'var(--main-graphic-color)';
        parentOfparent.style.borderBottom = '2px solid var(--main-graphic-color)';
    }

}

function elementInnerHTMLIsEmpty(element){
    if (element.innerHTML == '') {
        let parentOfparent = element.parentElement.parentElement;
        parentOfparent.firstChild.nextSibling.style.color = 'var(--main-color)';
        parentOfparent.style.borderBottom = '1px solid var(--main-color)';
    }
    
}

    let addRemoveBox = document.querySelector('.col-menu');
    addRemoveBox.addEventListener('click', e => {
        if(e.target.classList.contains('remove')){

            let name = e.target.nextElementSibling.id;
            let element = document.getElementById(name);
            let num = element.innerHTML;

            if (num == 0) {
                element.innerHTML = 0;
            } else {
                element.innerHTML = parseInt(num) - 1;
            }
    
            addToCarta(element);
            totalPriceCarta();

        }

        if(e.target.classList.contains('add')){

            let name = e.target.previousElementSibling.id;
            let element = document.getElementById(name);
            let num = element.innerHTML;
            element.innerHTML = parseInt(num) + 1;
        
            addToCarta(element);
            totalPriceCarta();
        }
    });
