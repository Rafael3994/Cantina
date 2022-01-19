<?php
    if (isset($_COOKIE['comprado'])) {
        include('error.php');
    }
    else {
        include('menu.php');
        setcookie('comprado', true,  strtotime("tomorrow"));
    }
?>