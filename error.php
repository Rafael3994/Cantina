<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina Pedralbes Menu i Carta</title>
    <?php include('includes.inc');?>
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/cartaMatiTarda.css">
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
                    <div align="center">
                        <div>
                            <h1> Oops! <!/h1>
                        </div>
                        <div top:10px>
                            <img src="img/error.png"/>
                            <h2>Ja has realitzat la teva comanda diària</h2>
                            <h1>Seràs redirigit automàticament a la pàgina principal</h1>
                        </div>
                    </div>


                    <!-- ========== Column Left ======== -->
                    <div class="content-left-side">
                    </div>
                    <!-- ========== Column Right ======= --> 
                    <div class="content-right-side">
                    </div>
                </div>
                <!-- ========== Row Flux ========== -->             
                <div class="content-flux">
                    <div class="back-index-butt btn">
                        <button id="back-to-index"><i style='font-size:14px' class='fas'>&#xf100;</i>  Previous Step</button>
                    </div>
                    <button id="send-order" class="send-order-butt">PREU 0.00 €</button>
                </div>
            </div>
        </div>

        <?php include('footer.php');?>
    </div>
    <script src="js/printMenuCarta.js"></script>
    <script src="js/changeMenuPageTitle.js"></script>
    <script src="js/menu.js"></script>
</body>
</html>