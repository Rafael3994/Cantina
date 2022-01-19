<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina Pedralbes Formulari</title>
    <?php include('includes.inc');?>
    <link rel="stylesheet" href="css/formulari.css">
</head>
<body>
    <!-- Begin Page -->
    <div class="row-layout">
        <!-- ========== Header Start ========== -->
        <?php include('header.php');?>
        <!-- ========== End Header ========== -->
        <div class="main-row">
            <div class="content-col">
                <!-- ========== Row Head ========== -->
                <div class="content-head">
                    <h2>BENVINGUTS</h2>
                    <h2>LA TEVA COMANDA</h2>
                    <h2>DETALLS ENCARREC</h2>
                    <h2>CONFIRMACIO</h2>
                </div>
                <!-- ========== Row Main ========== -->
                <div class="content-main">
                    <div>
                        <br><br>             
                        <div id="llistat"></div>
                        <br>
                        <div id="total"></div>

                        <br><br>

                        <h2 class="titol">DADES USUARI</h2>
                        <br>
                        <form action="confirmacio.php" method="POST">
                            <div>
                                <label for="nom">Nom:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" id="nom" name="nom">
                                &nbsp;&nbsp;&nbsp;
                                <p class="missatgeAlerta">Camp Incorrecte*</p>
                            </div><br>
                            <div>
                                <label for="telefon">Telefon:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" id="telefon" name="telefon">
                                &nbsp;&nbsp;&nbsp;
                                <p class="missatgeAlerta">Camp Incorrecte*</p>
                            </div><br>
                            <div>
                                <label for="correu">Correu:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" id="correu" name="correu">
                                &nbsp;&nbsp;&nbsp;
                                <p class="missatgeAlerta">Camp Incorrecte*</p>
                            </div>
                        </form>
                    </div>
                    <br><br>
                    <input type="hidden" id="hiddenNom" name="hiddenNom" value = "">
                    <input type="hidden" id="hiddenCorreu" name="hiddenCorreu" value = "">
                    <input type="hidden" id="hiddenComanda" name="hiddenComanda" value = "">
                </div>
                <!-- ========== Row Flux ========== -->
                <div class="content-flux">
                    <div class="back-index-butt btn">
                        <button id="back-to-menu"><i style='font-size:14px' class='fas'>&#xf100;</i>  Previous Step</button>                     
                    </div>
                    <button id="seguent">Següent</button>
                </div>
            </div>
        </div>
        <?php include('footer.php');?>
    </div>
    <script src="js/changeDetailsPageTitle.js"></script>
    <script src="js/validacions_formulari.js" language="javascript" type="text/javascript"></script>
</body>
</html>