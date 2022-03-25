<?php 

    require 'config.php';   

    header('Content-type: application/json');




    $stmt = $pdo->prepare('SELECT * FROM opiniao');
    $stmt->execute();


    if ($stmt->rowCount() >= 1){
        echo json_encode ($stmt->fetchAll(PDO::FETCH_ASSOC));
    } else {
        echo json_encode('erro ao pegar comentario');
    }
