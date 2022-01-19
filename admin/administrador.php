<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Website Cantina Institut Pedralbes">
    <meta name="keywords" content="HTML, CSS, JavaScript, PHP">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
    <link rel="stylesheet" href="../css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,500&display=swap" rel="stylesheet">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <link rel="stylesheet" href="../css/admin.css">
</head>
<body>
    <!-- Begin Page -->
    <div class="row-layout">
        <!-- ========== Header Start ========== -->
        <?php include('../headerAdmin.php');?>
        <!-- ========== End Header ========== -->
        <div class="main-row">
            <div class="content-col">
                <!-- ========== Row Head ========== -->
                <!-- <div class="content-head">
                    <h2>BENVINGUTS</h2>
                    <h2>LA TEVA COMANDA</h2>
                    <h2>DETALLS ENCARREC</h2>
                    <h2>CONFIRMACIO</h2>
                </div> -->
                <!-- ========== Row Main ========== -->
                <div class="content-main">
                    <h3>PAGINA ADMINISTRADOR</h3>
                </div>
                <!-- ========== Row Flux ========== -->
                <div class="content-flux">
                    <div class="back-index-butt btn">
                        <button id="back-to-index"><i style='font-size:14px' class='fas'>&#xf100;</i>  Previous Step</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- ========== Footer Start ========== -->
        <?php include('../footer.php');?>
        <!-- ========== End Footer ========== -->
    </div>
</body>
</html>