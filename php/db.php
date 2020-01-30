<?php 

    $ROOT_URL = 'http://localhost:8888/battleship_chinese/';
    $user = 'root';
    $password = 'root';
    $db = 'BattleShipComments';
    $host = 'localhost';
    $port = 8889;

    // create connection
    $conn = mysqli_connect($host, $user, $password, $db);

    //checking connection
    if(mysqli_connect_errno()) {
        echo 'failed to connect to MySQL ' . mysqli_connect_errno();
    } 

