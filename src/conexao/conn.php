<?php

    // Declarar as variáveis necessárias para gerar a minha conexão com o banco de dados ....
    $hostname = "sql310.epizy.com";
    $dbname = "epiz_28841512_library";
    $username = "epiz_28841512";
    $password = "lvSfVndNVZ";

    try {
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo 'Conexão realizada com sucesso!';
    } catch (PDOException $e) {
        echo 'Error: '.$e->getMessage();
    }