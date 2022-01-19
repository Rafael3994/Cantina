/*=============================================
=            List Carta Mati | Tarda          =
=============================================*/
let cartaMatiTarda = {"Cafè": "1€", "Cafè amb Llet": "1.2€", "Té": "1.5€", "Coca-Cola": "2€"
, "Dònut": "1.5€", "Croissant": "1.5€", "Pastís de Formatge": "2.5€", "Poma": "1€"
, "Entrepa de Fuet": "2.5€", "Bikini": "2.5€", "Pizza 4 Estacions": "3.5€", "Frankfurt": "3€"};
/*=====  End of List Carta Mati | Tarda  ======*/

/*=============================================
=            List Carta Mati | Tarda Img      =
=============================================*/
let cartaMatiTardaImg = ["a_cafe.jpg", "a_cafellet.jpg", "a_te.jpg", "a_cocacola.jpg"
                        , "b_donut.jpg", "b_croissant.jpg", "b_cheesecake.jpg", "b_poma.jpg"
                        , "c_fuet.jpg", "c_bikini.jpg", "c_pizza.jpg", "c_frankfurt.jpg" ];


    let htmlLeftSideContentCarta = '                        <!-- ========== Row Title ======== -->';
    htmlLeftSideContentCarta += '                        <div class="title-left"><h3>Carta Mati | Tarda</h3></div>';
    htmlLeftSideContentCarta += '                        <!-- ========== Row Carta Mati Tarda ========== -->';
    htmlLeftSideContentCarta += '                        <div class="col-menu equalHMVWrap eqWrap">';

    let i = 1;
    for (var key in cartaMatiTarda) {
        if (cartaMatiTarda.hasOwnProperty(key)) {
            htmlLeftSideContentCarta += '<div class="equalHMV box-carta">';
            htmlLeftSideContentCarta += `<p class="flowText textNom">${key}</p>`;
            htmlLeftSideContentCarta += `<p class="flowText textPreu">${cartaMatiTarda[key]}</p>`;
            htmlLeftSideContentCarta += '<div class="add-remove-btn">';
            htmlLeftSideContentCarta += `<div id="remove${i}" class="btn-carta remove">-</div>`;
            htmlLeftSideContentCarta += `<p id="num${i}" class="btn-carta num">${0}</p>`;
            htmlLeftSideContentCarta += `<div id="add${i}" class="btn-carta add">+</div>`;
            htmlLeftSideContentCarta += '</div>';
            htmlLeftSideContentCarta += `<img src="img/${cartaMatiTardaImg[i - 1]}" />`;
            htmlLeftSideContentCarta += '</div>';
            i++;
        }
    }
    
    htmlLeftSideContentCarta += '                        </div>';

    let htmlRightSideContentMenu = '                            <!-- ========== Row Title ======== -->';
    htmlRightSideContentMenu += '                        <div class="title-right"><h3>Comanda Usuari</h3></div>';
    htmlRightSideContentMenu += '                        <!-- ========== Row Price ========== -->';
    htmlRightSideContentMenu += '                        <div id="zona1" class="col-price">';
    htmlRightSideContentMenu += '                            <h4>Begudes Fredes i Calentes</h4>';
    htmlRightSideContentMenu += '                        </div>';
    htmlRightSideContentMenu += '                        <div id="zona2" class="col-price">';
    htmlRightSideContentMenu += '                            <h4>Brioixeria i Fruites</h4>';
    htmlRightSideContentMenu += '                        </div>';
    htmlRightSideContentMenu += '                        <div id="zona3" class="col-price">';
    htmlRightSideContentMenu += '                            <h4>Entrepans Freds i Calents</h4>';
    htmlRightSideContentMenu += '                        </div>';

    document.getElementsByClassName('content-left-side')[0].insertAdjacentHTML('afterbegin', htmlLeftSideContentCarta);
    document.getElementsByClassName('content-right-side')[0].insertAdjacentHTML('afterbegin', htmlRightSideContentMenu);
