<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina Pedralbes Website</title>
    <?php include('includes.inc');?>
    <link rel="stylesheet" href="css/index.css">
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
                        <div class="slideshow-container">
                            <div class="mySlides fade">
                                <img src="img/indexImg1.jpg">
                            </div>
                            <div class="mySlides fade">
                                <img src="img/indexImg2.jpg">
                            </div>
                            <div class="mySlides fade">
                                <img src="img/indexImg3.jpg">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ========== Row Flux ========== -->
                <div class="content-flux">
                    <button id="send-admin" class="send-admin-butt">ADMIN</button>
                    <button id="send-menu" class="send-menu-butt">MENUS</button>
                </div>
            </div>
        </div>
        <!-- ========== Footer Start ========== -->
        <?php include('footer.php');?>
        <!-- ========== End Footer ========== -->
    </div>
    <script src="js/changeWelcomePageTitle.js"></script>
    <script src="js/index.js"></script>
</body>
</html>