<?php

    // Declarar as variáveis necessárias para gerar a minha conexão com o banco de dados ....
    $hostname = "fdb21.awardspace.net";
    $dbname = "3850603_mylibrary";
    $username = "3850603_mylibrary";
    $password = "Jul1o_657_470";

    try {
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo 'Conexão realizada com sucesso!';
    } catch (PDOException $e) {
        echo 'Error: '.$e->getMessage();
    }