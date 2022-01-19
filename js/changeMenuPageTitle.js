// Cambia el formato del titulo
let titlePage = document.getElementsByClassName('content-head')[0].childNodes[3].style;
titlePage.color = 'var(--main-color)';
titlePage.fontWeight = 'var(--w4-font)';
titlePage.borderBottom  = '2px solid var(--main-color)';

let backTitlePage = document.getElementsByClassName('content-head')[0];

backTitlePage.childNodes[1].style.color = 'var(--main-color)';

backTitlePage.childNodes[1].style.fontWeight = 'var(--w2-font)';